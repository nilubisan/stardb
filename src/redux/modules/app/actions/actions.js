import { INITIALIZE_APP, SET_APP_INITIALIZED } from './actionTypes'

export const initializeApp = () => ({
    type: INITIALIZE_APP
});

export const setAppInitialized = () => ({
    type: SET_APP_INITIALIZED
})
