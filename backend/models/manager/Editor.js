const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EditorSchema = new Schema({
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
    }
});

module.exports = Comment = mongoose.model('Editor', EditorSchema);