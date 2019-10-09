// Import all action types for the Article 
import ArticleApi from '../../api/ArticleApi';

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks
export const NEW_ARTICLE = "NEW_ARTICLE"
export const NEW_ARTICLE_FAILED = "NEW_ARTICLE_FAILED"
export const GET_ARTICLE = "GET_ARTICLE"
export const GET_ARTICLE_FAILED = "GET_ARTICLE_FAILED"
export const GET_ALL_ARTICLES = "GET_ALL_ARTICLES"
export const GET_ALL_ARTICLES_FAILED = "GET_ALL_ARTICLES_FAILED"
export const UPDATE_ARTICLE = "UPDATE_ARTICLE"
export const UPDATE_ARTICLE_FAILED = "UPDATED_ARTICLE_FAILED"
export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const DELETE_ARTICLE_FAILED = "DELETE_ARTICLE_FAILED"