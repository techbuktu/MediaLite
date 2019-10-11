import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';
import editorReducer from './editorReducer';
import writerReducer from './writerReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
    user: userReducer,
    editor: editorReducer,
    writer: writerReducer,
    article: articleReducer,
    comment: commentReducer
});

export default rootReducer;