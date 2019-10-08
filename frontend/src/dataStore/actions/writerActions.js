// Import all action types for the Writer
import WriterApi from '../../api/WriterApi';

import { NEW_WRITER, NEW_WRITER_FAILED, GET_WRITER, GET_WRITER_BY_USER, GET_WRITER_BY_USER_FAILED,
    GET_WRITER_FAILED, GET_ALL_WRITERS,GET_ALL_WRITERS_FAILED, UPDATE_WRITER, UPDATE_WRITER_FAILED, 
    DELETE_WRITER, DELETE_WRITER_FAILED

} from './types/writers';
//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks
