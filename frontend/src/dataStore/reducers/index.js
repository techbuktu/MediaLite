import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';
import editorReducer from './editorReducer';

const rootReducer = combineReducers({
    user: userReducer,
    editor: editorReducer,
    writers: {},
    articles: {},
    comments: {}
});

export default rootReducer;