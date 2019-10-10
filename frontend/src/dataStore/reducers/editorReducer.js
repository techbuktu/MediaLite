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

