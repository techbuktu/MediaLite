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
    Article.find({ link: req.params.link })
        .then(article => {
            res.status(200).json({
                successMessage: "OK",
                article })
        })
        .catch(err => {
            res.status(400).json({
                message: `Article with URL of ${req.params.link} does not exist.`
            })
        })
}); 

//@route POST api/publisher/articles
//@desc Create a New Article object
//@access Public
router.post('/', (req, res) => {
    const {title, body, publish, writer} = req.body;

    if(!title || !writer || !body){
        return res.status(400).json({
            errorMessage: "Please, supply all the required fields."
        })
    };
    
    //Check if this is a duplicate POST request
    Article.findOne({ writer: writer, title: title})
        .then(duplicateArticle => {
            if(duplicateArticle){
                res.status(400).json({
                    errorMessage: `An article with this data already exists.`
                })
            }else {
                const newArticle = new Article({
                    title,
                    body,
                    writer,
                    publish
                });
        
                newArticle.save()
                    .then(new_article => {
                        res.json({
                            successMessage: `You have successfully-added Article: ${new_article.title}`,
                            new_article: new_article
                        })
                    })
                    .catch(dbError => {
                        res.status(400).json({
                            errorMessage: `There was an error saving this Article (${title}. Please, check your data and try again.`,
                            DBError: `${dbError}`
                        })
                    })
            }
        })

   
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