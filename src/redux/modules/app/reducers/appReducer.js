import { updateObject } from '../../../../utils/commonUtils';
import {SET_APP_INITIALIZED} from '../actions/actionTypes'

const initialState = {
    isInitialized: false
}

const appReducer = (state=initialState, action) =>  {
    if(typeof action === 'undefined') return state
    switch(action.type) {
        case SET_APP_INITIALIZED:
            return updateObject(state, {isInitialized: true})
        default:
            return state;
    }
};

export default appReducer;