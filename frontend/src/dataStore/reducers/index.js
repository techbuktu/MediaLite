import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    editors: {},
    writers: {},
    articles: {},
    comments: {}
});

export default rootReducer;