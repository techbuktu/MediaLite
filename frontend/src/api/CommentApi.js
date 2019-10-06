import Axios from './BaseApi';

class CommentApi{
    //For handling all CRUD ops against the Comment API endpoint: /api/publisher/comments

    static newComment(new_comment_obj){
        return Axios.post(`/publisher/comments`, new_comment_obj);
    }

    static updateComment(comment_id, updated_comment_obj){
        return Axios.put(`/publisher/comments/${comment_id}`, updated_comment_obj);
    }

    static deleteComment(comment_id){
        return Axios.delete(`/publisher/comments/${comment_id}`);
    }

    static getCommentsforArticle(article_link){
        return Axios.get(`/publisher/comments/for/${article_link}`);
    }

    static getAllComments(){
        return Axios.get(`/publisher/comments/`);
    }
}
