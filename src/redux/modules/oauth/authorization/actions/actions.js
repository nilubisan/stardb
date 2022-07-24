import { LOGIN_USER, LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from './actionTypes'
import { SET_AUTH_STATUS } from './actionTypes'

export const loginUser = (username, password) => ({
    type: LOGIN_USER,
    username,
    password
});

export const setAuthStatus = (isAuth) => ({
    type: SET_AUTH_STATUS,
    isAuth
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
});


export const logoutUserRequest = () => ({
    type: LOGOUT_USER_REQUEST,
});


export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS,
});

export const logoutUser = () => ({
    type: LOGOUT_USER
})
