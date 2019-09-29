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

//@route GET api/managers/writers/:link
//@desc GET a single Comment object
//@access Public 
router.get('/:id', (req, res) => {
    User.find({ _id: req.params.id })
        .then(user => {
            res.status(200).json({comment: comment})
        })
        .catch(err => {
            res.status(400).json({
                message: `User with id of ${req.params.id} does not exist.`
            })
        })
}); 

//@route POST api/publisher/Comments
//@desc Create a New Comment object
//@access Public
router.post('/', (req, res) => {

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