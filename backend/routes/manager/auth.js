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
    res.send('Home of Auth API!');
})

//@route POST /api/auth/login 
//@desc Login endpoint for user
//@access Public
router.post('/login', (req, res) => {
    //get login creds
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({
            errorMessage: `Please, supply both 'email' and 'password' fields to login`
        })
    }
    User.findOne({email})
        .then(authUser => {
            if(!authUser){
                return res.status(400).json({
                    errorMessage: `A matching User with this email does not exist.`
                })
            }
            //Compare the client-supplied req.body.password with the hashed authUser.password in the DB
            bcrypt.compare(password, authUser.password)
                .then(isMatch => {

                    //If client-supplied does not match, return a helpful errorMessage
                    if(!isMatch){
                        return res.status(400).json({
                            errorMessage: `Password does not match. Please, check and try again.`
                        })
                    }
                    //If password matches, sign and return user{username, id} and 'auth_token' to client
                        jwt.sign(
                            {id: authUser.id},
                            config.jwtSecret,
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err) throw err;
    
                                //Else, send back signed JWT token and other data for the matching authUser 
                                res.json({
                                    auth_token: token,
                                    user: {
                                        id: authUser.id,
                                        firstName: authUser.firstName,
                                        lastName: authUser.lastName,
                                        email: authUser.email
                                    }
                                })
                            }
                        )
                    
                })
                .catch(matchError => {
                    res.json({
                        PasswordMismatchError: matchError
                    })
                })
                
        })
        .catch(authError => {
            res.status(400).json({
                errorMessage: `Sorry, no User found with that username and password combination.`
            })
        })
    //Validate username and password 

    //Return JWT auth token 
})


module.exports = router;