import React, { createContext, useReducer} from 'react';

//Import the individual reducers for each API resource/object type
import AppReducer from './reducers'

//REDUX_DEVTOOLS_EXTENSION Setup
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialAppState = {

}

export const AppContext = createContext(AppReducer, initialAppState);

// Create the 'Provider' to wrap the components of the app
// to allow flow of app-level state to all children components

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialAppState);
    
    return (
        <AppContext.Provider value={{
            users: state.users,
            editors: state.editors,
            writers: state.writers,
            articles: state.articles,
            comments: state.comments
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
