const express = require("express");
const router = express.Router();

//Import the 'Editor' model
const Editor = require("../../models/manager/Editor");


//@route GET api/manager/editors
//@desc Get list of All Editors
//@access Public 
router.get('/', (req, res) => {
    res.send('Home of Editors API');
})

//@route 
//@desc 
//@access 


module.exports = router;