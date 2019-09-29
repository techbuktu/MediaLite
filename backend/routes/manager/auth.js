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

//@route GET api/managers/
//@desc 
//@access 



module.exports = router;