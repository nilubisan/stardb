import {SET_PLANET, FETCH_RANDOM_PLANET} from './actionTypes';
import {SET_IS_LOADING, SET_ERROR} from '../../common/actions/actionTypes'


export const setPlanet = (planet) => ({ type: SET_PLANET, planet });
export const fetchRandomPlanet = () => ({ type: FETCH_RANDOM_PLANET });