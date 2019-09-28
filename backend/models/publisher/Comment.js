const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commenter: {
        type: Map,
        required: true
    },
    article: {
        type: Map,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    commentDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);