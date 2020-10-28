import React, { createContext, useReducer} from 'react';

//Import individual reducer type from their respective files
import userReducer, { userInitialState } from './userReducer';
import editorReducer from './editorReducer';
import writerReducer from './writerReducer';
import articleReducer from './articleReducer';
import commentReducer from './commentReducer';

//REDUX_DEVTOOLS_EXTENSION Setup
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const initialAppState = {}

export const AppContext = createContext({});

// Create the 'Provider' to wrap the components of the app
// to allow flow of app-level state to all children components

export const AppProvider = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [editorState, editorDispatch] = useReducer(editorReducer, editorInitialState);
    const [writerState, writerDispatch] = useReducer(writerReducer, writerInitialState);
    const [articleState, articleDispatch] = useReducer(articleReducer, articleDispatch);
    const [commentState, commentDispatch] = useReducer(commentReducer, commentInitialState);

    //const [state, dispatch] = useReducer(AppReducer, initialAppState);
    
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





/**
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = { };
const middleware = [thunk];

//REDUX_DEVTOOLS_EXTENSION Setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;

*/
