import {SET_IS_LOADING, SET_ERROR, SET_PLANET, FETCH_RANDOM_PLANET} from './actionTypes';

export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
export const setError = (error) => ({ type: SET_ERROR, error });
export const setPlanet = (planet) => ({ type: SET_PLANET, planet });
export const fetchRandomPlanet = () => ({ type: FETCH_RANDOM_PLANET });