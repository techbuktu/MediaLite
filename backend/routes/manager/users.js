const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../../config/keys');

//Import the 'User' model
const User = require("../../models/manager/User");


//@route GET api/manager/users
//@desc Get list of All Users
//@access Public 
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(
                {user_list: users}
                );
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `No users were found`
            })
        });
})

//@route GET api/managers/users/:id
//@desc GET a single User object
//@access Public 
router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            res.status(200).json({user: user})
        })
        .catch(err => {
            res.status(400).json({
                message: `User with id of ${req.params.id} does not exist.`
            })
        })
}); 

//@route POST api/manager/users
//@desc Create a New User object
//@access Public
router.post('/', (req, res) => {
    const {firstName, lastName, email, password } = req.body;

    //Check that all required fields are supplied
    if (!firstName || !lastName || !email || !password){
        return res.status(400).json({
            errorMessage: "Please, supply all the fields' values correctly."
        })
    }

    //If all fields were supplied, check if this could create a duplicate User object.
    User.findOne({ email: email})
        .then(duplicateUser => {
            
            if(duplicateUser){
                return res.status(400).json({
                    errorMessage: `User with this email ${email} already exists. Please, try with a different email or request a password change.`
                })
            } else {
                let newUser = new User({
                    firstName, lastName, email, password
                });

                //Create a salt and hash the supplied plain-text User.password
                bcrypt.genSalt(10, (err, salt) => {
                   bcrypt.hash(newUser.password, salt, (err, hash) => {
                       if(err) throw err;
                       newUser.password = hash;
                       newUser.save()
                        .then(new_user => {
                            //Sign the JWT token 
                            jwt.sign(
                                { id: new_user.id},
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    //If JWT signing is successful, return API response with new user and token data
                                    res.json({
                                        successMessage: 'Congrats! :) You have sucessfully created a new user.',
                                        new_user: {
                                            id: new_user.id,
                                            firstName: new_user.firstName,
                                            lastName: new_user.lastName,
                                            email: new_user.email,
                                            auth_token: token
                                        }
                                    })
                                }
                            )  //jwt.sign() ends 
                        }) // .then() ends
                   })
                })
            }



        })
})

//@route PUT api/manager/users/:id
//@desc Update an existing User object
//@access Private 
router.put('/:id', (req, res) => {
    user = User.findOne({ _id: req.params.id })
    if(user){
        const updatedFields = Object.keys(req.body);
        let userUpdate = {};

        updatedFields.map(field => {
            userUpdate[field] = req.body[field];
        })
        let query = { _id: req.params.id };
        User.updateOne(query, userUpdate, (err) => {
            if(err){
                res.status(400).json({
                    errorMessage: `Sorry, user with id ${user._id} could not be updated`
                })
            }else{
                User.findById(req.params.id)
                    .then(updatedUser => {
                        res.json({
                            successMessage: `You have successfully updated user with id: ${updatedUser._id}`,
                            updatedUser
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            errorMessage: `Sorry, user with id (${req.params.id}) could not be updated.`
                        })
                    })
            }
        })
        
    }else {
        res.status(400).json({
            errorMessage: `Sorry, no user with id of ${req.params.id} was found.`
        })
    }

        /* 
        .then(user => {
            const userFields = Object.keys(req.body);
            //res.json({userFields});
            userFields.map(field => {
                user[field] = req.body[field]
            })

        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `Sorry, no user with id of ${req.params.id} was found.`
            })
        })
        */
})

//@route DELETE api/managers/:id
//@desc Delete a single User object
//@access Private 
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.remove()
                .then(() => {
                    res.json({
                        successMessage: `You have removed user with id: ${req.params.id}`
                    })
                })
            
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `User with id of ${req.params.id} not found.`,
                fullErrorMessage: `${err}`
            })
        })
})



module.exports = router;

/*
if(user){
        const userFields = Object.keys(req.body);
        res.json({userFields});
    }else {
        res.status(400).json({
            errorMessage: `Sorry, no user with id of ${req.params.id} was found.`
        })
    }
*/