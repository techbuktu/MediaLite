import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';
import editorReducer from './editorReducer';
import writerReducer from './writerReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    users: userReducer,
    editors: editorReducer,
    writers: writerReducer,
    articles: articleReducer,
    comments: commentReducer
});

export default rootReducer;