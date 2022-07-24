import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from '../actions/actionTypes';
import { updateObject } from '../../../../../utils/commonUtils';
import { SET_AUTH_STATUS } from '../actions/actionTypes'

const initialState = {
    isAuth: false,
    loading: false,
    error: null
}

const loginReducer = (state=initialState, action) => {
    if(typeof action === 'undefined') return state;
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return updateObject(state, { isAuth: false, loading: true });
        case LOGIN_USER_SUCCESS:
            return updateObject(state, { loading: false, isAuth: true });
        case LOGIN_USER_FAIL:
            console.log(action)
            return updateObject(state, { loading: false, error: action.error });
        case SET_AUTH_STATUS:
            return updateObject(state, {isAuth: action.isAuth});
        case LOGOUT_USER_REQUEST:
            return updateObject(state, { isAuth: false, loading: true });
        case LOGOUT_USER_SUCCESS:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
};

export default loginReducer;