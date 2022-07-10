import {LOAD_PLANET_REQUEST, LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE, FETCH_RANDOM_PLANET_REQUEST} from './actionTypes';

export const loadPlanetRequest = () => ({ type: LOAD_PLANET_REQUEST});
export const loadPlanetSuccess = (planet) => ({ type: LOAD_PLANET_SUCCESS, planet });
export const loadPlanetFailure = (error) => ({ type: LOAD_PLANET_FAILURE, error });
export const fetchRandomPlanetRequest = () => ({ type: FETCH_RANDOM_PLANET_REQUEST });