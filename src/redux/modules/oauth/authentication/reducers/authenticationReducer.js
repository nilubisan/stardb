import {SET_AUTHENTICATION_IS_IN_PROGRESS } from '../actions/actionTypes';
import { updateObject } from '../../../../../utils/commonUtils';

const initialState = {
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION_IS_IN_PROGRESS:
            return updateObject(state, {loading: action.inProgress});
        default:
            return state;
    }
};

export default authReducer;