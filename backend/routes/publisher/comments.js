const express = require("express");
const router = express.Router();

//Import the 'Comment' model
const Comment = require("../../models/publisher/Comment");


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

//@route GET api/manager/comments/:link
//@desc GET all comments for an Article (/:link)
//@access Private 
router.get('/:link', (req, res) => {

})

//@route GET api/managers/comments/:id
//@desc GET a single Comment object
//@access Public 
router.get('/:id', (req, res) => {
    Comment.find({ _id: req.params.id })
        .then(comment => {
            res.status(200).json({comment: comment})
        })
        .catch(err => {
            res.status(400).json({
                message: `Comment with id of ${req.params.id} does not exist.`
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

//@route PUT api/publisher/Comments/:link
//@desc Update an existing Comment object
//@access Private 
router.put('/:link', (req, res) => {

})

//@route DELETE api/managers/:link
//@desc Delete a single Comment object
//@access Private 
router.delete('/:link', (req, res) => {
    
})

module.exports = router;