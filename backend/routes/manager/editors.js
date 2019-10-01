const express = require("express");
const router = express.Router();

//Import the 'Editor' model
const Editor = require("../../models/manager/Editor");

//@route 
//@desc 
//@access 

//@route GET api/manager/editors
//@desc Get list of All Editors
//@access Public 
router.get('/', (req, res) => {
    Editor.find()
        .then(editors => {
            res.json({
                successMessage: `${editors.length} editors were found!`,
                editors
            })
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: `Sorr, no editors were found..`
            })
        })
})

//@route GET api/managers/editrs/:id
//@desc GET a single Editor object
//@access Public 
router.get('/:link', (req, res) => {
    Editor.find({ _id: req.params.link })
        .then(editor => {
            res.status(200).json({editor: editor})
        })
        .catch(err => {
            res.status(400).json({
                message: `Editor with link of ${req.params.link} does not exist.`
            })
        })
}); 

//@route POST api/manager/editors
//@desc Create a New Editor object
//@access Public
router.post('/', (req, res) => {
    const {user, about} = req.body;

    //Make sure all required Editor model's fields were sent by client
    if(!user || !about){
        return res.status(400).json({
            errorMessage: `Please, fill out all required fields. You only supplied ${Object.keys(req.body)} .`
        })
    } 

    //Check if a duplicate Editor instance already exists
    Editor.findOne({ user: user})
        .then(duplicateEditor => {
            res.status(400).json({
                errorMessage: `Sorry, a Editor attached to that user already exists.`
            })
        })
        .catch(err => {
            //No duplicate Editor was found. It's safe to create a new one.
            const newEditor = new Editor({
                user:user, about: about
            })
            newEditor.save()
                .then(new_editor => {
                    res.json({
                        successMessage: `You have successfully-added a new Editor`,
                        new_editor: new_editor
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        errorMessage: `Sorry, a new Editor could not be created. Please, check the date you sent and try again.`
                    })
                })
            
        })
})

//@route PUT api/manager/editrs/:id
//@desc Update an existing Editor object
//@access Private 
router.put('/:id', (req, res) => {
    //Check if this Editor exists 
    Editor.findOne({ _id: req.params.id})
        .then(editor => {
            //Get the updated fields
            const updatedEditorFields = Object.keys(req.body);

            // Initialize and populate an object to store the updated fields' value
            let editorUpdate = {};
            updatedEditorFields.map(field => {
                editorUpdate[field] = req.body[field];
            })
            
            //Create a 'query' object to search the DB collection with.
            let query = {_id: req.params.id};

            //Query the DB collection for the Editor instance, update it and send successful response to client
            Editor.update(query, editorUpdate)
                .then(updatedEditor => {
                    res.json({
                        successMessage: `Editor (${updatedEditor._id}) has been successfully-updated.`,
                        updated_editor: updatedEditor
                    })
                })
                .catch(updateError => {
                    res.status(400).json({
                        errorMessage: `Editor (${req.params.id}) could not be updated.`
                    })
                })
                
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `Sorry, an Editor with the supplied id (${req.params.id}) was not found.`
            })
        })


})

//@route DELETE api/manager/editors/:id
//@desc Delete a single Editor object
//@access Private 
router.delete('/:id', (req, res) => {
    Editor.findById(req.params.id)
        .then(editor => {
            editor.remove()
                .then(() => {
                    res.json({
                        successMessage: `Editor with id ${editor._id} was successfully-deleted.`
                    })
                })
                .catch(err => {
                    res.json({
                        errorMessage: `Editor with id ${req.params.id} could not be deleted.`
                    })
                })
        })
        .catch(err => {
            res.status(400).json({
                errorMessage: `Editor with id ${req.params.id} was not found.`
            })
        })
    
})


module.exports = router;