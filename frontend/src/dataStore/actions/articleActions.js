// Import ArticleApi object 
import ArticleApi from '../../api/ArticleApi';

//Import all Article-related action TYPES
import { NEW_ARTICLE, NEW_ARTICLE_FAILED, GET_ARTICLE, GET_ARTICLE_FAILED, GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FAILED, UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED, DELETE_ARTICLE, DELETE_ARTICLE_FAILED,
    GET_ALL_ARTICLES_BY_WRITER, GET_ALL_ARTICLES_BY_WRITER_FAILED
} from './types/articles';

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const createNewArticle = (new_article_obj) => dispatch => {
    //Handles action types: NEW_ARTICLE, NEW_ARTICLE_FAILED
    ArticleApi.newArticle(new_article_obj)
        .then(res => {
            dispatch({
                type: NEW_ARTICLE,
                payload: res.data 
            })
        })
        .catch(err => {
            dispatch({
                type: NEW_ARTICLE_FAILED,
                payload: err
            })
        })
}

export const getArticle = (article_link) => dispatch =>  {
    //Handles action types: GET_ARTICLE, GET_ARTICLE_FAILED
    ArticleApi.getArticle(article_link)
        .then(res => {
            dispatch({
                type: GET_ARTICLE,
                payload: res.data 
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ARTICLE_FAILED,
                payload: err
            })
        })
}

export const getAllArticles = ( ) => dispatch => {
    //Handles action types: GET_ALL_ARTICLES, GET_ALL_ARTICLES_FAILED
    ArticleApi.getAllArticles()
        .then(res => {
            dispatch({
                type: GET_ALL_ARTICLES,
                payload: res.data 
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ARTICLES_FAILED,
                payload: err
            })
        })
}

export const updateArticle = (article_link, updated_article_obj) => dispatch =>  {
    //Handles action types: UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED
    ArticleApi.updateArticle(article_link)
        .then(res => {
            dispatch({
                type: UPDATE_ARTICLE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_ARTICLE_FAILED ,
                payload: err
            })
        })
}

export const deleteArticle = ( article_link) =>  dispatch => {
    ArticleApi.deleteArticle(article_link)
        .then(res => {
            dispatch({
                type: DELETE_ARTICLE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_ARTICLE_FAILED,
                payload: err
            })
        })
}

export const getAllArticlesByWriter = (writer_link) => dispatch => {
    ArticleApi.getAllArticlesByWriter(writer_link)
        .then(res => {
            dispatch({
                type: GET_ALL_ARTICLES_BY_WRITER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ARTICLES_BY_WRITER_FAILED,
                payload: err
            })
        })
}