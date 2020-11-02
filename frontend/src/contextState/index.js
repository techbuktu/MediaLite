import React, { createContext, useReducer} from 'react';

//Import individual reducer type from their respective files
import userReducer, { userInitialState } from './reducers/userReducer';
import editorReducer, { editorInitialState } from './reducers/editorReducer';
import writerReducer, { writerInitialState } from './reducers/writerReducer';
import articleReducer, { articleInitialState }  from './reducers/articleReducer';
import commentReducer, { commentInitialState }  from './reducers/commentReducer';

//REDUX_DEVTOOLS_EXTENSION Setup
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const initialAppState = {}

export const AppContext = createContext({});

// Create the 'Provider' to wrap the components of the app
// to allow flow of app-level state to all children components

const AppProvider = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [editorState, editorDispatch] = useReducer(editorReducer, editorInitialState);
    const [writerState, writerDispatch] = useReducer(writerReducer, writerInitialState);
    const [articleState, articleDispatch] = useReducer(articleReducer, articleInitialState);
    const [commentState, commentDispatch] = useReducer(commentReducer, commentInitialState);

    //const [state, dispatch] = useReducer(AppReducer, initialAppState); <= NOT IMPLEMENTED. **DO NOT USE*
    
    return (
        <AppContext.Provider value={{
            userState, userDispatch,
            editorState, editorDispatch,
            writerState, writerDispatch,
            articleState, articleDispatch,
            commentState, commentDispatch
        }}>
            { props.children }

        </AppContext.Provider>
    )

}


export default AppProvider;