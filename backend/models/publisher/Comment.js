const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commenter: {
        type: Map,
        required: true
    },
    article: {
        type: Map,
        of: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        default: Date.now
    },
    publish: {
        type: Boolean,
        default: true
    }
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);