// Import all action types for the Editor
import EditorApi from '../../api/EditorApi';
import {NEW_EDITOR, NEW_EDITOR_FAILED, GET_EDITOR, GET_EDITOR_FAILED, GET_ALL_EDITORS, 
    GET_ALL_EDITORS_FAILED, UPDATE_EDITOR, UPDATE_EDITOR_FAILED, DELETE_EDITOR, 
    DELETE_EDITOR_FAILED, GET_EDITOR_BY_USER, GET_EDITOR_BY_USER_FAILED } from './types/editors';

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const newEditor = (new_editor_obj, dispatch) => {
    //Handles action types: NEW_EDITOR and NEW_EDITOR_FAILED
    EditorApi.newEditor(new_editor_obj)
        .then(res => {
            dispatch({
                type: NEW_EDITOR,
                payload: res.data
            })
        })
        .catch(err => {
            dipatch({
                type: NEW_EDITOR_FAILED,
                payload: err
            })
        })
};

export const getEditorById = (dipatch, editorId) => {
    //Handles action types: GET_EDITOR and GET_EDITOR_FAILED
    EditorApi.getEditorById(editorId)
        .then(res => {
            dispatch({
                type: GET_EDITOR,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_EDITOR_FAILED,
                payload: err
            })
        })
};

export const getEditorByUser = (dipatch, related_user_obj) => {
    //Handles action types: GET_EDITOR_BY_USER and GET_EDITOR_BY_USER_FAILED
    EditorApi.getEditorByUser(related_user_obj)
        .then(res => {
            dispatch({
                type: GET_EDITOR_BY_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_EDITOR_BY_USER_FAILED,
                payload: err
            })
        })
};

export const getAllEditors = (dipatch) => {
    //Handles action types: GET_ALL_EDITORS, GET_ALL_EDITORS_FAILED
    EditorApi.getAllEditors()
        .then(res => {
            dispatch({
                type: GET_ALL_EDITORS,
                payload: res.data
            })
        })
        .catch(err => {
            dipatch({
                type: GET_ALL_EDITORS_FAILED,
                payload: err
            })
        })

};

export const updateEditor = (dispatch, editor_id, updated_editor_obj) => {
    //Handles action types: UPDATE_EDITOR and UPDATE_EDITOR_FAILED
    EditorApi.updateEditor(editor_id, updated_editor_obj)
        .then(res => {
            dispatch({
                type: UPDATE_EDITOR,
                payload: UPDATE_EDITOR_FAILED
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_EDITOR_FAILED,
                payload: err
            })
        })

};

export const deleteEditor = (dispatch, editor_id) => {
    //Handles action types: DELETE_EDITOR and DELETE_EDITOR_FAILED
    EditorApi.deleteEditor(editor_id)
        .then(res => {
            dipatch({
                type: DELETE_EDITOR,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_EDITOR_FAILED,
                payload: err
            })
        })
}