import {CHANGE_CURRENT_PLANETS_PAGE_NUMBER, LOAD_PLANETS_REQUEST, LOAD_PLANETS_SUCCESS, LOAD_PLANETS_FAILURE, FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST, LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE} from './actionTypes';

export const changeCurrentPlanetsPageNumber = (pageNumber) => ({type: CHANGE_CURRENT_PLANETS_PAGE_NUMBER, pageNumber});
export const loadPlanetsRequest = () => ({type: LOAD_PLANETS_REQUEST});
export const loadPlanetsSuccess = (result) => ({type: LOAD_PLANETS_SUCCESS, result});
export const loadPlanetsFailure = (error) => ({type: LOAD_PLANETS_FAILURE, error});
export const fetchPlanetsByPageNumberRequest = (pageNumber) => ({type: FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST, pageNumber});

export const loadPlanetSuccess = (planet) => ({type: LOAD_PLANET_SUCCESS, planet});
