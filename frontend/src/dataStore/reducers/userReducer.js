import { REGISTER_USER, REGISTER_USER_FAILED, GET_USER, GET_USER_FAILED, 
    GET_ALL_USERS, GET_ALL_USERS_FAILED, UPDATE_USER,UPDATE_USER_FAILED, 
    LOGIN_SUCCESS, LOGIN_FAILED, DELETE_USER, DELETE_USER_FAILED
} from './types/users';

//Create the initial/default state for the userReducer
const initialState = {
    user_list: [],
    errorMessage: {},
    get_users_error : {},
    user: {},
    get_user_error: {},
    register_error : {},
    updated_user: {},
    update_user_error: {},
    delete_user_error : {}
}

userReducer = (state=initialState, action) => {
    switch(action.type){
        case REGISTER_USER:
            return {
                ...state,

            };
        case REGISTER_USER_FAILED:
            return {
                ...state,
                register_error: action.payload.data.errorMessage
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload.user
            };

        case GET_USER_FAILED:
            return {
                ...state, 
                errorMessage: action.payload.errorMessage
            };
        case GET_ALL_USERS:
            return {
                ...state, 
                user_list: action.payload
            };
        case GET_ALL_USERS_FAILED:
            return{
                ...state, 
                errorMessage: action.payload
            }
        case UPDATE_USER:
            return {
                ...state, 
                user: action.payload,
                user_list: [action.payload, ...state.user_list]
            };
        case UPDATE_USER_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case LOGIN_SUCCESS:
            return {
                state
            };
        case LOGIN_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                user: null
            };
        case DELETE_USER:
            return {
                ...state,
                //user_list: return an array minus deleted user
            };
        case DELETE_USER_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
}


export default userReducer;