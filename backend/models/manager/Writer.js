const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug_generator = require('mongoose-slug-generator');
mongoose.plugin(slug_generator);

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
        slug: _id,
        required: false
    },
    editor: {
        type: Map,
        of: String
    }
});

module.exports = Writer = mongoose.model('Writer', WriterSchema);