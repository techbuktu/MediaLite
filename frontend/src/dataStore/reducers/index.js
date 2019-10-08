import { combineReducers } from 'redux';
//Import individual reducer type from their respective files

const rootReducer = combineReducers({
    users: {},
    editors: {},
    writers: {},
    articles: {},
    comments: {}
});

export default rootReducer;