import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/actionTypes';
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
            return updateObject(state, { loading: false, error: action.error });
        case SET_AUTH_STATUS:
            return updateObject(state, {isAuth: action.isAuth});
        default:
            return state;
    }
};

export default loginReducer;