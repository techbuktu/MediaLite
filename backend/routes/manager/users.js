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
            console.log(`User GET ALL DB Error: ${err}`)
        });
})

//@route GET api/managers/
//@desc 
//@access 



module.exports = router;