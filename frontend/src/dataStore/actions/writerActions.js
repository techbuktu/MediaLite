// Import all action types for the Writer
import WriterApi from '../../api/WriterApi';

import { NEW_WRITER, NEW_WRITER_FAILED, GET_WRITER, GET_WRITER_BY_USER, GET_WRITER_BY_USER_FAILED,
    GET_WRITER_FAILED, GET_ALL_WRITERS,GET_ALL_WRITERS_FAILED, UPDATE_WRITER, UPDATE_WRITER_FAILED, 
    DELETE_WRITER, DELETE_WRITER_FAILED

} from './types/writers';
//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks

export const newWriter = (dispatch, new_writer_obj) => {
    //Handles action types: NEW_WRITER and NEW_WRITER_FAILED
    WriterApi;
}

export const getWriter = (dispatch, writer_id) => {
    //Handles action types: GET_WRITER, GET_WRITER_FAILED
    WriterApi;
}

export const getWriterByUser = (dispatch, related_user_obj) => {
    //Handles action types: GET_WRITER_BY_USER and GET_WRITER_BY_USER_FAILED
    WriterApi;
}

export const getAllWriters = (dispatch) => {
    //Handles action types: GET_ALL_WRITERS and GET_ALL_WRITERS_FAILED
    WriterApi;
}

export const updateWriter = (dispatch, writer_id, updated_writer_obj) => {
    //Handles action types: UPDATE_WRITER and UPDATE_WRITER_FAILED 
    WriterApi;
}

export const deleteWriter = (dispatch, writer_id) => {
    //Handles action types: DELETE_WRITER and DELETE_WRITER_FAILED
    WriterApi;
}
