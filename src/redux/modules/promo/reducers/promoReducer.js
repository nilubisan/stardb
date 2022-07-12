import { updateObject } from '../../../../utils/commonUtils';
import { LOAD_PLANET_REQUEST, LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE } from '../actions/actionTypes';

const initialState = {
    planet: {},
    person: {},
    starship: {},
    loading: false,
    error: null
};

const promoReducer = (state=initialState, action) => {
    if(typeof action === "undefined") return state
    switch(action.type) {
        case LOAD_PLANET_REQUEST:
            return updateObject(state.randomPlanet, {loading: true});
        case LOAD_PLANET_FAILURE:
            return updateObject(state.randomPlanet, {loading: false, error: action.error});
        case LOAD_PLANET_SUCCESS:
            return updateObject(state.randomPlanet, {loading: false, planet: action.planet});
        default:
            return state;
    }
};

export default promoReducer;

