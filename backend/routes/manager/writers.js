const express = require("express");
const router = express.Router();

//Import the 'Writer' model
const Writer = require("../../models/manager/Writer");


//@route GET api/manager/writers
//@desc Get list of All Writer
//@access Public 
router.get('/', (req, res) => {
    Writer.find()
        .then(writers => {
            res.json({
                successMessage: `${writers.length} writer(s) were found.`,
                writers

            })
        })
        .catch(apiError => {
            res.status(400).json({
                errorMessage: "Sorry, no writers were found"
            })
        })
})

//@route 
//@desc 
//@access 

//@route GET api/managers/writers/:link
//@desc GET a single Writer object
//@access Public 
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.status(200).json({user: user})
        })
        .catch(err => {
            res.status(400).json({
                message: `User with id of ${req.params.id} does not exist.`
            })
        })
}); 

//@route POST api/manager/writers
//@desc Create a New Writer object
//@access Public
router.post('/', (req, res) => {
    const {user, editor, about} = req.body;

    if(!user || !editor || !about){
        res.status(400).json({
            errorMessage: `Please, fill out all the fields and re-submit.`
        })
    }else {
        //Construct and save a new Writer instance into the 'writers' collection
        const newWriter = new Writer({
            user, editor, about
        })
        newWriter.save()
            .then(new_writer => {
                res.json({
                    successMessage: 'You have successfully created a new Writer instance.',
                    new_writer: new_writer
                })
            })
            .catch(dbError => {
                res.status(500).json({
                    errorMessage: `There was an error. A new Writer instance could not be created. Please, try again.`
                })
            })
    }
})

//@route PUT api/manager/writers/:link
//@desc Update an existing Writer object
//@access Private 
router.put('/:id', (req, res) => {
    targetWriter = Writer.findById(req.params.id);
    if(!targetWriter){
        res.status(404).json({
            errorMessage: `Writer (${req.params.id}) not found.`
        })
    }else {
        const updatedWriterFields = Object.keys(req.body);

        let writerUpdate = {};

        updatedWriterFields.map(field => {
            writerUpdate[field] = req.body[field];
        })

        let query = {_id: req.params.id}

        //Update the Writer in the DB and return a success response to the API client
        Writer.updateOne(query, writerUpdate, (dbError) =>{
            if(dbError){
                res.status(500).json({
                    errorMessage: `Writer (${req.params.id}) could not be updated.`
                })
            }else {
                Writer.findById(req.params.id)
                    .then(updated_writer => {
                        res.json({
                            successMessage: `Congrats! This is your updated Writer.`,
                            updated_writer
                        })
                    })
                    .catch(dbError => {
                        res.status(500).json({
                            errorMessage: `There was an error retrieving Writer (${req.params.id}). Please, try again.`
                        })
                    })
            }
        })
    }


})

//@route DELETE api/managers/:link
//@desc Delete a single Writer object
//@access Private 
router.delete('/:id', (req, res) => {
    //Find Writer 
    const writer = Writer.findById(req.params.id)
    if(!writer){
        res.status(400).json({
            errorMessage: `Sorry, Writer (${req.params.id}) was not found. Please, check the ID and try again.`
        })
    }else {
        writer.remove()
            .then(() => {
                res.json({
                    successMessage: `You have successfully-deleted Writer: ${writer._id}`
                })
            })
            .catch(bdError => {
                res.status(400).json({
                    errorMessage: `This Writer (${req.params.id}) could not be deleted. Pleasec check your auth creds and try again.`
                })
            })
    }
})



module.exports = router;