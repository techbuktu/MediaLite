// Import all action types for the User
import { REGISTER_USER, REGISTER_USER_FAILED, GET_USER, GET_USER_FAILED, GET_ALL_USERS, GET_ALL_USERS_FAILED, UPDATE_USER,
        UPDATE_USER_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, DELETE_USER, DELETE_USER_FAILED } from './types/users';

import UserApi from '../../api/UserApi';

//One 'exported' action creator for each action type 
//(Error-related action creators to be dispatch()ed inside their appropriate .catch() callbacks
export const registerUser = (dispatch, newUserObj) => {
    //Handles action types: REGISTER_USER and REGISTER_USER_FAILED types
    UserApi.newUser(newUserObj)
        .then(res => {
            dispatch({
                type: REGISTER_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_USER_FAILED,
                payload: err
            })
        })

};

export const getUser = (dispatch, userId) => {
    //Handles GET_USER and GET_USER_FAILED
    UserApi.getUser(userId)
        .then(res => {
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_USER_FAILED,
                payload: err
            })
        })
};

export const getAllUsers = (dispatch) => {
    //Handles GET_ALL_USERS and GET_ALL_USERS_FAILED action types 
    UserApi.getAllUsers()
        .then(res => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_USERS_FAILED,
                payload: err
            })
        })
}

export const updateUser = (userId, updatedUserObj, dispatch) => {
    //Handles types: UPDATE_USER and UPDATE_USER_FAILED
    UserApi.updateUser(userId, updatedUserObj)
        .then(res => {
            dispatch({
                type: UPDATE_USER,
                payoad: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_USER_FAILED,
                payload: err
            })
        })
}

export const loginUser = (loginCredsObj, dispatch) => {
    //Handles action types: LOGIN_SUCCESS and LOGIN_FAILED
    UserApi.loginUser(loginCredsObj)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            //Set auth_token in localStorage 
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILED,
                payload: err
            })
        })
}

export const deleteUser = (userId, dispatch) => {
    //Handles action types: DELETE_USER and DELETE_USER_FAILED
    UserApi.deleteUser(userId)
        .then(res => {
            dispatch({
                type: DELETE_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: DELETE_USER_FAILED,
                payload: err
            })
        })
}