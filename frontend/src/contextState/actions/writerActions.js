// Import all action types for the Writer
import WriterApi from '../../api/WriterApi';

import { NEW_WRITER, NEW_WRITER_FAILED, GET_WRITER, GET_WRITER_BY_USER, GET_WRITER_BY_USER_FAILED,
    GET_WRITER_FAILED, GET_ALL_WRITERS,GET_ALL_WRITERS_FAILED, UPDATE_WRITER, UPDATE_WRITER_FAILED, 
    DELETE_WRITER, DELETE_WRITER_FAILED, GET_WRITERS_UNDER_EDITOR, GET_WRITERS_UNDER_EDITOR_FAILED

} from './types/writers';
//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const createNewWriter = (new_writer_obj) => dispatch => {
    //Handles action types: NEW_WRITER and NEW_WRITER_FAILED
    WriterApi.newWriter(new_writer_obj)
        .then(res => {
            dispatch({
                type: NEW_WRITER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: NEW_WRITER_FAILED,
                payload: err
            })
        })
};

export const getWriter = (writer_id) => dispatch => {
    //Handles action types: GET_WRITER, GET_WRITER_FAILED
    WriterApi.getWriter(writer_id)
        .then(res => {
            dispatch({
                type: GET_WRITER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_WRITER_FAILED,
                payload: err
            })
        })
};

export const getWriterByUser = ( user_id) => dispatch => {
    //Handles action types: GET_WRITER_BY_USER and GET_WRITER_BY_USER_FAILED
    WriterApi.getWriterByUser(user_id)
        .then(res => {
            dispatch({
                type: GET_WRITER_BY_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_WRITER_BY_USER_FAILED,
                payload: err
            })
        })
}

export const getAllWriters = ( ) =>  dispatch => {
    //Handles action types: GET_ALL_WRITERS and GET_ALL_WRITERS_FAILED
    WriterApi.getAllWriters()
        .then(res => {
            dispatch({
                type: GET_ALL_WRITERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_WRITERS_FAILED,
                payload: err
            })
        })
}

export const updateWriter = (writer_id, updated_writer_obj) => dispatch => {
    //Handles action types: UPDATE_WRITER and UPDATE_WRITER_FAILED 
    WriterApi.updateWriter(writer_id, updated_writer_obj)
        .then(res => {
            dispatch({
                type: UPDATE_WRITER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_WRITER_FAILED,
                payload: err
            })
        })
}

export const deleteWriter = (writer_id) => dispatch => {
    //Handles action types: DELETE_WRITER and DELETE_WRITER_FAILED
    WriterApi.deleteWriter(writer_id)
        .then(res => {
            dispatch({
                type: DELETE_WRITER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_WRITER_FAILED ,
                payload: err
            })
        })
}

export const getWritersUnderEditor = (editor_id) => dispatch => {
    //Handles action types: GET_WRITERS_BY_EDITOR and GET_WRITERS_BY_EDITOR_FAILED
    WriterApi.getWritersUnderEditor(editor_id)
        .then(res => {
            dispatch({
                type: GET_WRITERS_UNDER_EDITOR,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_WRITERS_UNDER_EDITOR_FAILED,
                payload: err
            })
        })
}
