const express = require("express");
const router = express.Router();

//Import the 'Comment' model and the 'Article' mode in some routes
const Comment = require("../../models/publisher/Comment");
const Article = require("../../models/publisher/Article");

//@route GET api/publisher/comments
//@desc Get list of All Comments
//@access Public 
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => {
            res.json({
                successMessage: `${comments.length} comment(s) were found.`,
                comments: comments
            })
        })
        .catch(error => {
            res.status(400).json({
                errorMessage: `Sorry, no Comments were found.`
            })
        })
})

//@route GET api/manager/comments/for/:link
//@desc GET all comments for an Article (/:link)
//@access Private 
router.get('/for/:articleLink', (req, res) => {
    //Check if matching article exists first
    const article = Article.findOne({ link: req.params.articleLink });
    if(!article){
        return res.status(400).json({
            errorMessage: `Sorry, that Article (${req.params.articleLink}) does not exist. Please, check and try again.`,
            article
        })
    }else {
        // GET all Comments for this article 
        const targetArticle = Article.findOne({ link: req.params.link });

        Comment.find({ article: targetArticle})
            .then(commentsforArticle => {
                if(commentsforArticle.length > 0){
                    res.json({
                        successMessage: `${commentsforArticle.length} comments were found for this Article(${targetArticle.link})`,
                        comments: commentsforArticle
                    })
                }else {
                    res.status(400).json({
                        errorMessage: `Sorry, no comments were found for Article(${targetArticle.link})`
                    })
                }
            })
            .catch(DBError => {
                res.status(500).json({
                    errorMessage: `There was a problem retrieving comments for this Article(${article.link}).Please, check your data and try again.`,
                    DBError
                })
            })
    }
})

//@route GET api/managers/comments/:id
//@desc GET a single Comment object
//@access Public 
router.get('/:id', (req, res) => {
    Comment.findOne({ _id: req.params.id })
        .then(comment => {
            res.status(200).json({
                successMessage: "OK",
                comment: comment
            })
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `Comment with id of ${req.params.id} does not exist.`
            })
        })
}); 

//@route POST api/publisher/Comments
//@desc Create a New Comment object
//@access Public
router.post('/', (req, res) => {
    //Get all submitted fields 
    const {commenter, commentBody, article} = req.body;

    if(!commenter || !commentBody || !article){
        res.status(400).json({
            errorMessage: "Please, supply all required fields and try again."
        })
    }else {

        // Check if a duplicateComment exists 
        Comment.findOne({ article: article, commentBody: commentBody})
            .then(duplicateComment => {
                if(duplicateComment){
                    res.status(400).json({
                        errorMessage: `This Comment (${duplicateComment._id}) already exists.`,
                        duplicate_comment: duplicateComment
                    })
                }else {
                    //Instantiate and save new Comment 
                    const newComment = new Comment({
                        commenter, commentBody, article
                    })

                    newComment.save()
                        .then(new_comment => {
                            res.json({
                                successMessage: `You have sucessfully-created a new Comment(${new_comment._id})`,
                                new_comment
                            })
                        })
                        .catch(DBError => {
                            //Return a DBError if newComment could not be saved to 'comments' collection.
                            res.status(500).json({
                                errorMessage: `Sorry, this comment could not be saved. Please, check your data and try again.`,
                                DBError : DBError
                            })
                        })
                }
            })
        
    }
})

//@route PUT api/publisher/Comments/:id
//@desc Update an existing Comment object
//@access Private 
router.put('/:id', (req, res) => {
    //Check that this Comment instance exists
    const comment = Comment.findOne({ _id: req.params.id });
    if(!comment){
        //Return error
        res.status(400).json({
            errorMessage: `This Comment(${req.params.id}) does not exist. Please, check your data and try again.`
        })
    }else {
        //Check that client user only wants to update (allowed) Comment.publish field
        if(Object.keys(req.body)[0] === 'publish'){
            //Update the Comment.field value
            Comment.updateOne({ _id: req.params.id}, {publish: req.body["publish"]}, (error) =>{
                if(error){
                    res.status(400).json({
                        errorMessage: `You sent bad data. Please, check and try again.`
                    })
                }else {
                    Comment.findOne({ _id: req.params.id })
                        .then(updatedComment => {
                            res.json({
                                successMessage: `You have successfully-updated Comment(${req.params.id})`,
                                updated_comment: updatedComment
                            })
                        })
                        .catch(dbError => {
                            res.status(400).json({
                                errorMessage: `There was an error updating this comment. Please, check your creds and try again, if possible.`,
                                DBError: dbError
                            })
                        })
                }
            })  

        }else{
            res.status(400).json({
                badDataError: `You sent the wrong data to update this Comment(${ req.params.id}). Please, check and try again.`
            })
        }
    }
})

//@route DELETE api/managers/:link
//@desc Delete a single Comment object
//@access Private 
router.delete('/:id', (req, res) => {
    //Check that Comment exists and delete if so.
    Comment.findById(req.params.id)
        .then(comment => {
            comment.remove()
                .then(() => {
                    res.json({
                        successMessage: `You have successfully-deleted: Comment(${req.params.id})`
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        errorMessage: `This Comment(${req.params.id} could not be deleted. Please, check your creds and try again.)`,
                        AppError: err
                    })
                })
        })

})

module.exports = router;