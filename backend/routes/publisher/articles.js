const express = require("express");
const router = express.Router();

//Import the 'Article' model
const Article = require("../../models/publisher/Article");


//@route GET api/publisher
//@desc Get list of All Articles
//@access Public 
router.get('/', (req, res) => {
    res.send('Home of Articles API');
})

//@route 
//@desc 
//@access 




module.exports = router;