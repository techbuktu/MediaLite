const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: false
    },
    writer: {
        type: Map,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        required: true
    },
    publish: {
        type: Boolean,
        required: true
    }
});

module.exports = Article = mongoose.model('Article', ArticleSchema);