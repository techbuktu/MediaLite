import { NEW_WRITER, NEW_WRITER_FAILED, GET_WRITER, GET_WRITER_BY_USER, GET_WRITER_BY_USER_FAILED,
    GET_WRITER_FAILED, GET_ALL_WRITERS,GET_ALL_WRITERS_FAILED, UPDATE_WRITER, UPDATE_WRITER_FAILED, 
    DELETE_WRITER, DELETE_WRITER_FAILED, GET_WRITERS_UNDER_EDITOR, GET_WRITERS_UNDER_EDITOR_FAILED

} from '../actions/types/writers';

const initialState = {
    writer_list: [],
    errorMessage: {},
    writer: { },
    updated_writer: {} //Or remove this and just use 'writer' object for both cases.
};

const writerReducer = (state=initialState, action) => {
    switch(action.type){
        case NEW_WRITER:
            return {
                ...state, 
                writer: action.payload.writer,
                writer_list: [action.payload.new_writer, ...state.writer_list]
            };
        case NEW_WRITER_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case GET_WRITER:
            return {
                ...state, 
                writer: action.payload.writer
            };
        case GET_WRITER_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_WRITER_BY_USER:
            return {
                ...state, 
                writer: action.payload.writer
            };
        case GET_WRITER_BY_USER_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_WRITERS:
            return {
                ...state, 
                writer_list: action.payload.writer_list
            };
        case GET_ALL_WRITERS_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case UPDATE_WRITER:
            return {
                ...state,
                writer: action.payload.updated_writer
            };
        case UPDATE_WRITER_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case DELETE_WRITER:
            return {
                ...state,
                writer_list: state.writer_list.filter(writer => writer._id !== action.payload.deleted_writer._id)
            };
        case DELETE_WRITER_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_WRITERS_UNDER_EDITOR:
            return {
                ...state, 
                writer_list: action.payload.writer_list
            };
        case GET_WRITERS_UNDER_EDITOR_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state
    }
};


export default writerReducer;