import { combineReducers } from 'redux';
//Import individual reducer type from their respective files
import userReducer from './userReducer';
import editorReducer from './editorReducer';
import writerReducer from './writerReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';

/* when using react-redux 
const rootReducer = combineReducers({
    users: userReducer,
    editors: editorReducer,
    writers: writerReducer,
    articles: articleReducer,
    comments: commentReducer
});
**/

const AppReducer = () => {
    return {
        users: userReducer,
        editors: editorReducer,
        writers: writerReducer,
        articles: articleReducer,
        comments: commentReducer
    }
}

export default AppReducer;