import { CHANGE_CURRENT_PLANETS_PAGE_NUMBER, LOAD_PLANETS_REQUEST, LOAD_PLANETS_SUCCESS, LOAD_PLANETS_FAILURE } from '../actions/actionTypes';
import { updateObject } from '../../../../utils/commonUtils';

const initialState = {
    currentPageNumber: 1,
    pageCount: null,
    planets: null,
    loading: false,
    error: false
};

const planetsReducers = (state = initialState, action) => {
    if(typeof action === 'undefined') return state;
    switch (action.type) {
        case CHANGE_CURRENT_PLANETS_PAGE_NUMBER:
            return updateObject(state, { currentPageNumber: action.pageNumber })
        case LOAD_PLANETS_REQUEST:
            return updateObject(state, { loading: true })
        case LOAD_PLANETS_SUCCESS:
            const {planets, pageCount} = action.result;
            return updateObject(state, { loading: false, planets, pageCount })
        case LOAD_PLANETS_FAILURE:
            return updateObject(state, { loading: false, error: action.error })
        default:
            return state;
    }
};

export default planetsReducers;