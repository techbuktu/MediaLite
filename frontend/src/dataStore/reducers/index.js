import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';
import editorReducer from './editorReducer';
import writerReducer from './writerReducer';

const rootReducer = combineReducers({
    user: userReducer,
    editor: editorReducer,
    writer: writerReducer,
    articles: {},
    comments: {}
});

export default rootReducer;