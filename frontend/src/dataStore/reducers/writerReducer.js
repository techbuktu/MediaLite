import { NEW_WRITER, NEW_WRITER_FAILED, GET_WRITER, GET_WRITER_BY_USER, GET_WRITER_BY_USER_FAILED,
    GET_WRITER_FAILED, GET_ALL_WRITERS,GET_ALL_WRITERS_FAILED, UPDATE_WRITER, UPDATE_WRITER_FAILED, 
    DELETE_WRITER, DELETE_WRITER_FAILED, GET_WRITERS_BY_EDITOR, GET_WRITERS_BY_EDITOR_FAILED

} from '../actions/types/writers';

const initialState = {
    writer_list: [],
    errorMessage: {},
    writer: { },
    updated_writer: {} //Or remove this and just use 'writer' object for both cases.
};

writerReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
    }
};


export default writerReducer;