import axios from 'axios';

class ArticleApi {
    //apiUrl = "localhost:8000/api/publisher/articles/";
    
    constructor(){
        //this.apiUrl = apiUrl;
        }

    static getAllArticles(){

        return axios.get("http://localhost:8000/api/publisher/articles/");

    }

    static getSingleArticle(link){
        return axios.get(`http://localhost:8000/api/publisher/articles/${link}/`);
        
    }

    static postNewArticle(article_obj){
        return axios.post("http://localhost:8000/api/publisher/articles/", article_obj);
    }

}

export default ArticleApi;

