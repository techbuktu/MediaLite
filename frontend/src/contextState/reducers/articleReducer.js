import { NEW_ARTICLE, NEW_ARTICLE_FAILED, GET_ARTICLE, GET_ARTICLE_FAILED, GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FAILED, UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED, DELETE_ARTICLE, DELETE_ARTICLE_FAILED,
    GET_ALL_ARTICLES_BY_WRITER, GET_ALL_ARTICLES_BY_WRITER_FAILED
} from '../actions/types/articles';

export const articleInitialState = {
    article_list : [],
    errorMessage: {},
    article: {},
    article_comments: [] //Or just use commentReducer.comments_for_article array
};

const articleReducer = (state=articleInitialState, action) => {
    switch(action.type){
        case NEW_ARTICLE:
            return {
                ...state, 
                article: action.payload.new_article, // .article; VERIFY.
                article_list: [action.payload.new_article, ...state.article_list]
            };
        case NEW_ARTICLE_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_ARTICLE:
            return {
                ...state, 
                article: action.payload.article
            };
        case GET_ARTICLE_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_ARTICLES:
            return {
                ...state, 
                article_list: action.payload.article_list
            };
        case GET_ALL_ARTICLES_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case UPDATE_ARTICLE:
            return {
                ...state,
                article: action.payload.updated_article 
            };
        case UPDATE_ARTICLE_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case DELETE_ARTICLE:
            return {
                ...state, 
                article_list: state.article_list.filter(article => article._id !== action.payload.deleted_article._id)
            };
        case DELETE_ARTICLE_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_ARTICLES_BY_WRITER:
            return {
                ...state,
                article_list: action.payload.article_list
            };
        case GET_ALL_ARTICLES_BY_WRITER_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};

export default articleReducer;