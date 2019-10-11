import { NEW_ARTICLE, NEW_ARTICLE_FAILED, GET_ARTICLE, GET_ARTICLE_FAILED, GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FAILED, UPDATE_ARTICLE, UPDATE_ARTICLE_FAILED, DELETE_ARTICLE, DELETE_ARTICLE_FAILED
} from '../actions/types/articles';

const initialState = {
    article_list : [],
    errorMessage: {},
    article: {},
    article_comments: [] //Or just use commentReducer.comments_for_article array
};

articleReducer = (state=initialState, action) => {
    switch(action.type){
        case NEW_ARTICLE:
            return {
                ...state, 
                article: action.payload.new_article // .article; VERIFY.
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
                //article_list: -minus deleted_article
            };
        case DELETE_ARTICLE_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};

export default articleReducer;