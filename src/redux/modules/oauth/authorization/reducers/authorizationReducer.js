import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../actions/actionTypes';
import { updateObject } from '../../../../../utils/commonUtils';

const initialState = {
    isAuth: false,
    loading: false,
    error: null
}

const loginReducer = (state=initialState, action) => {
    if(typeof action === 'undefined') return state
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return updateObject(state, { loading: true });
        case LOGIN_USER_SUCCESS:
            return updateObject(state, { loading: false, isAuth: true });
        case LOGIN_USER_FAIL:
            return updateObject(state, { loading: false, error: action.error });
        default:
            return state;
    }
};

export default loginReducer;