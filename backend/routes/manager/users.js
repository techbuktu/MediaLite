const express = require("express");
const router = express.Router();

//Import the 'User' model
const User = require("../../models/manager/User");


//@route GET api/manager/users
//@desc Get list of All Users
//@access Public 
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(`User GET ALL DB Error: ${err}`);
        });
})

//@route GET api/managers/users/:id
//@desc GET a single User object
//@access Public 
router.get('/:id', (req, res) => {
    User.find({ _id: req.params.id })
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

})

//@route PUT api/manager/users/:id
//@desc Update an existing User object
//@access Private 
router.put('/:id', (req, res) => {

})

//@route DELETE api/managers/:id
//@desc Delete a single User object
//@access Private 
router.delete('/:id', (req, res) => {
    
})



module.exports = router;