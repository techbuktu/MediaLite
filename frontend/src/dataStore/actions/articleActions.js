// Import all action types for the Article 
import ArticleApi from '../../api/ArticleApi';

//Import all Article-related action TYPES
import { NEW_ARTICLE, NEW_ARTICLE_FAILED, GET_ARTICLE, GET_ARTICLE_FAILED, GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FAILED, UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED, DELETE_ARTICLE, DELETE_ARTICLE_FAILED
} from './types/articles';

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const newArticle = (dispatch, new_article_obj) => {
    //Handles action types: NEW_ARTICLE, NEW_ARTICLE_FAILED
    ArticleApi;
}

export const getArticle = (dispatch, article_id) => {
    //Handles action types: GET_ARTICLE, GET_ARTICLE_FAILED
    ArticleApi;
}

export const getALlArticles = (dispatch) => {
    //Handles action types: GET_ALL_ARTICLES, GET_ALL_ARTICLES_FAILED
    ArticleApi;
}

export const updateArticle = (dispatch, article_id, updated_article_obj) => {
    //Handles action types: UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED
    ArticleApi;
}