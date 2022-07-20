import { updateObject } from '../../../../utils/commonUtils';
import {SET_AUTH_STATUS, SET_APP_INITIALIZED} from '../actions/actionTypes'

const initialState = {
    isAuth: false,
    isInitialized: false
}

const appReducer = (state=initialState, action) =>  {
    if(typeof action === 'undefined') return state
    switch(action.type) {
        case SET_AUTH_STATUS :
            return updateObject(state, {isAuth: action.isAuth})
        case SET_APP_INITIALIZED:
            console.log("app initialized")
            return updateObject(state, {isInitialized: true})
        default:
            return state;
    }
};

export default appReducer;