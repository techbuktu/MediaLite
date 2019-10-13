import Axios from './BaseApi';

class ArticleApi {
    //Handles all API calls for the Article API endpoint: /api/publisher/articles 
    
    static newArticle(new_article_obj){
        return Axios.post(`/publisher/articles`, new_article_obj);
    }

    static getArticle(article_link){
        return Axios.get(`/publisher/articles/${article_link}`);
    }

    static getAllArticles(){
        return Axios.get(`/publisher/articles`);
    }

    static updateArticle(article_link, updated_article_obj){
        return Axios.put(`/publisher/articles/${article_link}`, updated_article_obj);
    }

    static deleteArticle(article_link){
        return Axios.delete(`/publisher/articles/${article_link}`);
    }
    
}

export default ArticleApi;