const express = require("express");
const router = express.Router();

//Import the 'Writer' model
const User = require("../../models/manager/Writer");


//@route GET api/manager/writers
//@desc Get list of All Writer
//@access Public 
router.get('/', (req, res) => {
    res.send('Home of Writers API');
})

//@route 
//@desc 
//@access 

//@route GET api/managers/writers/:link
//@desc GET a single Writer object
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

//@route POST api/manager/writers
//@desc Create a New Writer object
//@access Public
router.post('/', (req, res) => {

})

//@route PUT api/manager/writers/:link
//@desc Update an existing Writer object
//@access Private 
router.put('/:link', (req, res) => {

})

//@route DELETE api/managers/:link
//@desc Delete a single Writer object
//@access Private 
router.delete('/:link', (req, res) => {
    
})



module.exports = router;