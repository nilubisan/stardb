import { INITIALIZE_APP, SET_AUTH_STATUS, SET_APP_INITIALIZED } from './actionTypes'

export const initializeApp = () => ({
    type: INITIALIZE_APP
});

export const setAppInitialized = () => ({
    type: SET_APP_INITIALIZED
})

export const setAuthStatus = (isAuth) => ({
    type: SET_AUTH_STATUS,
    isAuth
});

