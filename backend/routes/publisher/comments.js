const express = require("express");
const router = express.Router();

//Import the 'Comment' model
const Comment = require("../../models/publisher/Comment");


//@route GET api/publisher/comments
//@desc Get list of All Comments
//@access Public 
router.get('/', (req, res) => {
    res.send('Home of Comments API');
})

//@route 
//@desc 
//@access 




module.exports = router;