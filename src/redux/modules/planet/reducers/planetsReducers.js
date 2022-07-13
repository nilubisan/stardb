import { CHANGE_CURRENT_PLANETS_PAGE_NUMBER, LOAD_PLANETS_REQUEST, LOAD_PLANETS_SUCCESS, LOAD_PLANETS_FAILURE, LOAD_PLANET_SUCCESS } from '../actions/actionTypes';
import { updateObject } from '../../../../utils/commonUtils';

const initialState = {
    promoPlanet: null,
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
        case LOAD_PLANET_SUCCESS:
            return updateObject(state, { loading: false, promoPlanet: action.planet})
        case LOAD_PLANETS_FAILURE:
            return updateObject(state, { loading: false, error: action.error })
        default:
            return state;
    }
};

export default planetsReducers;