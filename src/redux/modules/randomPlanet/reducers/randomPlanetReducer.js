import { updateObject } from '../../../../utils/randomPlanetUtils';
import {SET_IS_LOADING, SET_ERROR, SET_PLANET} from '../actions/actionTypes';

const initialState = {
    planet: {},
    isLoading: false,
    isError: false
};

const randomPlanetReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_IS_LOADING:
            return updateObject(state, {isLoading: action.isLoading});
        case SET_ERROR:
            return updateObject(state, {error: action.error});
        case SET_PLANET:
            return updateObject(state, {planet: action.planet});
        default:
            return state;
    }
};

export default randomPlanetReducer;

