import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, GET_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED,
    DELETE_COMMENT, DELETE_COMMENT_FAILED, GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED,
    GET_COMMENTS_FOR_ARTICLE, GET_COMMENTS_FOR_ARTICLE_FAILED
} from '../actions/types/comments';

const initialState = {
    comment_list: [],
    comments_for_article: [], // May also be implemented/function the same as comment_list???
    comment: {},
    updated_comment: {},
    errorMessage: {},
    comment_error: {}
};

commentReducer = (state=initialState, action) => {
    switch(action.type){
        case NEW_COMMENT:
            return {
                ...state, 
                comment: action.payload.new_comment, // .comment : VERIFY
                comment_list : [...comment_list, action.payload.new_comment]
            };
        case NEW_COMMENT_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                //comment_error: ???
            };
        case GET_COMMENT:
            return {
                ...state, 
                comment: action.payload.comment
            };
        case GET_COMMENT_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage,
                //comment_error: ???
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.payload.updated_comment,
            };
        case UPDATE_COMMENT_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case DELETE_COMMENT:
            return {
                ...state, 
                comment_list: [] // -minus action.payload.deleted_comment 
            };
        case DELETE_COMMENT_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_COMMENTS:
            return {
                ...state, 
                comment_list: action.payload.comment_list
            };
        case GET_ALL_COMMENTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case GET_COMMENTS_FOR_ARTICLE:
            return {
                ...state,
                comment_list: action.payload.comment_list,
                comments_for_article: action.payload.comment_list //May be redundant
            };
        case GET_COMMENTS_FOR_ARTICLE_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state
    }
};


export default commentReducer;