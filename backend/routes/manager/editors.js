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

//@route GET api/managers/editrs/:id
//@desc GET a single Editor object
//@access Public 
router.get('/:link', (req, res) => {
    Editor.find({ _id: req.params.link })
        .then(editor) => {
            res.status(200).json({editor: editor})
        })
        .catch(err => {
            res.status(400).json({
                message: `Editor with link of ${req.params.link} does not exist.`
            })
        })
}); 

//@route POST api/manager/editrs
//@desc Create a New Editor object
//@access Public
router.post('/', (req, res) => {

})

//@route PUT api/manager/editrs/:id
//@desc Update an existing Editor object
//@access Private 
router.put('/:id', (req, res) => {

})

//@route DELETE api/managers/:id
//@desc Delete a single Editor object
//@access Private 
router.delete('/:id', (req, res) => {
    
})


module.exports = router;