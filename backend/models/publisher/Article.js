const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug_generator = require('mongoose-slug-generator');
mongoose.plugin(slug_generator);

const ArticleSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        slug: 'title',
        required: false
    },
    writer: {
        type: Map,
        //required: true,
        of: String
    },
    body: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    publish: {
        type: Boolean,
        required: false,
        default: true
    }
});

module.exports = Article = mongoose.model('Article', ArticleSchema);