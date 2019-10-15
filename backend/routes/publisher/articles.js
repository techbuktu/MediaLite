const express = require("express");
const router = express.Router();

//Import the 'Article' model
const Article = require("../../models/publisher/Article");


//@route GET api/publisher
//@desc Get list of All Articles
//@access Public 
router.get('/', (req, res) => {

    Article.find()
        .then(articles => {
            res.json({
                successMessage: `${articles.length} article(s) were found!`,
                article_list: articles
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
    Article.findOne({ link: req.params.link })
        .then(article => {
            if(!article){
                res.status(404).json({
                    errorMessage: `Article with URL of ${req.params.link} does not exist.`
                })
            }else {
                res.status(200).json({
                    successMessage: "OK",
                    article: article 
                })
            }
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
    const updatedArticleFields = Object.keys(req.body);

    //Check if valid Article exists
    let article = Article.findOne({link: req.params.link})
    if(!article){
        res.status(400).json({
            errorMessage: `An Article with the URL ${req.params.link} does not exist.`
        })
    }else {
        //Create an update to send to DB
        let articleUpdate = {};
        updatedArticleFields.map(field => {
            articleUpdate[field] = req.body[field];
        })

        //Update article document in DB collection
        Article.update({link: req.params.link}, articleUpdate, (err) => { 
            if(err){
                res.status(400).json({
                    errorMessage: `This Article(${req.params.link}) could not be updated.`,
                    Error: err
                })
            }else {
                Article.findOne({ link: req.params.link })
                    .then(updatedArticle => {
                        res.json({
                            successMessage: `Article (${req.params.link}) updated.`,
                            updated_article: updatedArticle
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            errorMessage: `Article (${req.params.link}) could not be updated.`,
                            DBError: `${dbError}`
                        })
                    })
            }
        })
            
    }

})

//@route DELETE api/managers/:link
//@desc Delete a single Article object
//@access Private 
router.delete('/:link', (req, res) => {
    //Check that Article exists
    const article = Article.findOne({link: req.params.link});
    if(!article){
        res.status(400).json({
            errorMessage: `Sorry, Article (${req.params.link}) could not be found. Please, check your data and try again.`
        })
    }else {
        article.remove()
            .then(() => {
                res.status(200).json({
                    successMessage: `You have sucessfully-deleted Article (${article.link}).`
                })
            })
            .catch(error => {
                res.status(401).json({
                    errorMessage: `Sorry, Article (${article.link}) could not be deleted.`,
                    authError: `You don't have the credentials to delete Article (${article.link})`,
                    DBError: error
                })
            })
    }
})



module.exports = router;