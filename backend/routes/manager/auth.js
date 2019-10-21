const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

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

    if(!username || !password){
        return res.status(400).json({
            errorMessage: `Please, supply both 'username' and 'password' fields to login`
        })
    }
    User.findOne({username})
        .then(authUser => {
            if(authUser){
                //Sign and return user{username, id} and 'auth_token' to client 
            }
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