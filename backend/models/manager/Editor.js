const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug_generator = require('mongoose-slug-generator');
mongoose.plugin(slug_generator);

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
        slug: _id,
        required: false
    }
});

module.exports = Comment = mongoose.model('Editor', EditorSchema);