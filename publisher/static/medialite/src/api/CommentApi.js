import axios from 'axios';

class CommentApi {
    constructor(){}

    static getCommentsforArticle(article){
        return axios.get("http://localhost:8000/api/publisher/comments/");
    }
    
    static getSingleComment(link){
        return axios.get("http://localhost:8000/api/publisher/comments/${link}/");

    }

    static postNewComment(new_comment){
        return axios.post("http://localhost:8000/api/publisher/comments/", new_comment);
    }

}

export default CommentApi;