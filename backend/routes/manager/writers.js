const express = require("express");
const router = express.Router();

//Import the 'Writer' model
const User = require("../../models/manager/Writer");


//@route GET api/manager/writers
//@desc Get list of All Writer
//@access Public 
router.get('/', (req, res) => {
    res.send('Home of Writers API');
})

//@route 
//@desc 
//@access 




module.exports = router;