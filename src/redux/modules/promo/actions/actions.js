
import { INIT_PROMO_REQUEST, LOAD_PROMO_ERROR, LOAD_PLANET_REQUEST,  LOAD_PLANET_SUCCESS, LOAD_PLANET_FAILURE, LOAD_PERSON_REQUEST, LOAD_PERSON_SUCCESS, LOAD_PERSON_FAILURE, LOAD_STARSHIP_REQUEST, LOAD_STARSHIP_SUCCESS, LOAD_STARSHIP_FAILURE} from './actionTypes';


export const initPromoRequest = () => ({ type: INIT_PROMO_REQUEST });
export const loadPromoError = (error) => ({type: LOAD_PROMO_ERROR, error});

export const loadPlanetRequest = () => ({type: LOAD_PLANET_REQUEST});
export const loadPlanetSuccess = (planet) => ({type: LOAD_PLANET_SUCCESS, planet});
export const loadPlanetFailure = (error) => ({type: LOAD_PLANET_FAILURE, error});

export const loadPersonRequest = () => ({type: LOAD_PERSON_REQUEST});
export const loadPersonSuccess = (person) => ({type: LOAD_PERSON_SUCCESS, person});
export const loadPersonFailure = () => ({type: LOAD_PERSON_FAILURE});

export const loadStarshipRequest = () => ({type: LOAD_STARSHIP_REQUEST});
export const loadStarshipSuccess = (starship) => ({type: LOAD_STARSHIP_SUCCESS, starship});
export const loadStarshipFailure = (error) => ({type: LOAD_STARSHIP_FAILURE, error});

