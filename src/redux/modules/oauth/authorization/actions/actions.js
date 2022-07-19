import { LOGIN_USER, LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from './actionTypes'

export const loginUser = (username, password) => ({
    type: LOGIN_USER,
    username,
    password
});

export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
});


export const loginUserSuccess = () => ({
    type: LOGIN_USER_SUCCESS,
});

export const loginUserFail = (error) => ({
    type: LOGIN_USER_FAIL,
    error
})
