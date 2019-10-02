const express = require("express");
const router = express.Router();

//Import the 'Article' model
const Article = require("../../models/publisher/Article");


//@route GET api/publisher
//@desc Get list of All Articles
//@access Public 
router.get('/', (req, res) => {
    /*const articles = Article.find();
    if(articles.length < 1){
        res.status(500).json({
            errorMessage: `Sorry, no articles were found!`,
        })
    }else {
        res.json({
            successMessage: `${articles.length} article(s) were found!`,
            articles
        })
    }*/
    Article.find()
        .then(articles => {
            res.json({
                successMessage: `${articles.length} article(s) were found!`,
                articles
            })
        })
        .catch(er => {
            res.status(400).json({
                errorMessage: `Sorry, no articles were found!`,
            })
        })
        
})

//@route 
//@desc 
//@access 

//@route GET api/managers/writers/:link
//@desc GET a single Article object
//@access Public 
router.get('/:link', (req, res) => {
    User.find({ _id: req.params.link })
        .then(user => {
            res.status(200).json({user: user})
        })
        .catch(err => {
            res.status(400).json({
                message: `User with id of ${req.params.link} does not exist.`
            })
        })
}); 

//@route POST api/publisher/articles
//@desc Create a New Article object
//@access Public
router.post('/', (req, res) => {

})

//@route PUT api/publisher/articles/:link
//@desc Update an existing Article object
//@access Private 
router.put('/:link', (req, res) => {

})

//@route DELETE api/managers/:link
//@desc Delete a single Article object
//@access Private 
router.delete('/:link', (req, res) => {
    
})



module.exports = router;