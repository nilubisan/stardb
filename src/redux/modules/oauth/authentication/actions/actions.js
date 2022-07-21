import {AUTHENTICATE_USER, SET_AUTHENTICATION_IS_IN_PROGRESS} from './actionTypes';

export const authenticateUser = () => ({
    type: AUTHENTICATE_USER
});

export const setAuthenticationIsInProgress = (inProgress) => ({
    type: SET_AUTHENTICATION_IS_IN_PROGRESS,
    inProgress
});
