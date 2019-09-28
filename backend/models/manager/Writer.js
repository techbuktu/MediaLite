const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WriterSchema = new Schema({
    user: {
        type: Map,
        //of: String
    },
    about: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: false
    },
    editor: {
        type: Map,
        of: String
    }
});

module.exports = Writer = mongoose.model('Writer', WriterSchema);