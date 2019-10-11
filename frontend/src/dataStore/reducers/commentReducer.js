import {
    NEW_COMMENT, NEW_COMMENT_FAILED, GET_COMMENT, GET_COMMENT_FAILED, UPDATE_COMMENT, UPDATE_COMMENT_FAILED,
    DELETE_COMMENT, DELETE_COMMENT_FAILED, GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAILED,
    GET_COMMENTS_FOR_ARTICLE, GET_COMMENTS_FOR_ARTICLE_FAILED
} from '../actions/types/comments';

const initialState = {
    comment_list: [],
    comments_for_article: [],
    comment: {},
    updated_comment: {},
    errorMessage: {},
    comment_error: {}
};

commentReducer = (state=initialState, action) => {
    
}



