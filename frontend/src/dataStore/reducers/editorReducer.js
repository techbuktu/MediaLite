import {NEW_EDITOR, NEW_EDITOR_FAILED, GET_EDITOR, GET_EDITOR_FAILED, GET_ALL_EDITORS, 
    GET_ALL_EDITORS_FAILED, UPDATE_EDITOR, UPDATE_EDITOR_FAILED, DELETE_EDITOR, 
    DELETE_EDITOR_FAILED, GET_EDITOR_BY_USER, GET_EDITOR_BY_USER_FAILED } from '../actions/types/editors';

//Create the default/initial state of the editorReducer 
const initialState = {
    editor_list: [],
    errorMessage: {},
    editor: {},
    updated_user: {}
};

editorReducer = (state=initialState, action) => {
    switch(action.type){
        case NEW_EDITOR:
            return {
                ...state,
                editor: action.payload.editor
            };
        case NEW_EDITOR_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_EDITOR:
            return {
                ...state,
                editor: action.payload.editor
            };
        case GET_EDITOR_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_EDITORS:
            return {
                ...state, 
                editor_list: action.payload.editor_list
            };
        case GET_ALL_EDITORS_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case UPDATE_EDITOR:
            return {
                ...state,
                editor: action.payload.updated_editor
            };
        case UPDATE_EDITOR_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case DELETE_EDITOR:
            return {
                ...state, 
                successMessage: action.payload.successMessage,
                //deleted_editor: action.payload.deleted_editor
            };
        case DELETE_EDITOR_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            }
        case GET_EDITOR_BY_USER:
            return {
                ...state,
                editor: action.payload.editor
            };
        case GET_EDITOR_BY_USER_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default editorReducer;