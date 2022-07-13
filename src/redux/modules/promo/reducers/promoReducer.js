import { updateObject } from '../../../../utils/commonUtils';
import { LOAD_PLANET_REQUEST,  LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE, LOAD_PERSON_REQUEST, LOAD_PERSON_SUCCESS, LOAD_PERSON_FAILURE, LOAD_STARSHIP_REQUEST, LOAD_STARSHIP_SUCCESS, LOAD_STARSHIP_FAILURE } from '../actions/actionTypes';

const initialState = {
    planet: null,
    person: null,
    starship: null,
    planetLoading: false,
    personLoading: false,
    starshipLoading: false,
    planetError: null,
    personError: null,
    starshipError: null
};

const promoReducer = (state=initialState, action) => {
    if(typeof action === "undefined") return state
    switch(action.type) {
        case LOAD_PLANET_REQUEST:
            return updateObject(state, {planetLoading: true});
        case LOAD_PLANET_SUCCESS:
            return updateObject(state, {planetLoading: false, planet: action.planet});
        case LOAD_PLANET_FAILURE:
            return updateObject(state, {planetLoading: false, planetError: action.error});
        case LOAD_PERSON_REQUEST:
            return updateObject(state, {personLoading: true});
        case LOAD_PERSON_SUCCESS:
            return updateObject(state, {personLoading: false, person: action.person});
        case LOAD_PERSON_FAILURE:
            return updateObject(state, {personLoading: false, personError: action.error});

        case LOAD_STARSHIP_REQUEST:
            return updateObject(state, {starshipLoading: true});
        case LOAD_STARSHIP_SUCCESS:
            return updateObject(state, {starshipLoading: false, starship: action.starship});
        case LOAD_STARSHIP_FAILURE:
            return updateObject(state, {starshipLoading: false, starshipError: action.error});
        default:
            return state;
    }
};

export default promoReducer;

