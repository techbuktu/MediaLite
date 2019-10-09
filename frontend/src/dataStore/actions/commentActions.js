// Import all action types for the Comment model
import CommentApi from '../../api/CommentApi';
import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, GET_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED,
    DELETE_COMMENT, DELETE_COMMENT_FAILED, GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED,
    GET_COMMENTS_FOR_ARTICLE, GET_COMMENTS_FOR_ARTICLE_FAILED
} from './types/comments';
//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const newComment =(dispatch, new_comment_obj) => {
    //Handles action types: NEW_COMMENT and NEW_COMMENT_FAILED
    CommentApi.newComment(new_comment_obj)
        .then(res => {
            dispatch({
                type: NEW_COMMENT,
                payload: res.data
            });
            //dispatch(getAllComments???) and dispatch(getCommentsforArticle) here.
        })
        .catch(err => {
            dispatch({
                type: NEW_COMMENT_FAILED,
                payload: err
            })
        })
}

export const getComment = (dispatch, comment_id) => {
    //Handles action types: GET_COMMENT, GET_COMMENT_FAILED
    CommentApi.getComment(comment_id)
        .then(res => {
            dispatch({
                type: GET_COMMENT,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_COMMENT_FAILED ,
                payload: err
            })
        })
}

export const updateComment = (dispatch, comment_id, updated_comment_obj) => {
    //Handles action types: UPDATE_COMMENT and UPDATE_COMMENT_FAILED
    CommentApi.updateComment(comment_id, updated_comment_obj)
        .then(res => {
            dispatch({
                type: UPDATE_COMMENT,
                payload: res.data
            });
            //dispatch(getAllComments) and dispatch(getCommentforArticle) here
        })
        .catch(err => {
            dispatch({
                type: UPDATE_COMMENT_FAILED,
                payload: err
            })
        })
}

export const getCommentsforArticle = (dispatch, article_link) => {
    //Handles action types: GET_COMMENTS_FOR_ARTICLE and GET_COMMENTS_FOR_ARTICLE_FAILED
    CommentApi.getCommentsforArticle(article_link)
        .then(res => {
            dispatch({
                type: GET_COMMENTS_FOR_ARTICLE,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_COMMENTS_FOR_ARTICLE_FAILED,
                payload: err
            })
        })
}

export const getAllComments = (dispatch) => {
    //Handles action types: GET_ALL_COMMENTS and GET_ALL_COMMENTS_FAILED
    CommentApi.getAllComments()
        .then(res => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_COMMENTS_FAILED,
                payload: err
            })
        })
}

export const deleteComment = (dispatch, comment_id) => {
    //Handles action types: DELETE_COMMENT and DELETE_COMMENT_FAILED
    CommentApi.deleteComment(comment_id)
        .then(res => {
            dispatch({
                type: DELETE_COMMENT,
                payload: res.data
            });
            //dispatch(getCommentforArticle???)
        })
        .catch(err => {
            dispatch({
                type: DELETE_COMMENT_FAILED ,
                payload: err
            })
        })
}