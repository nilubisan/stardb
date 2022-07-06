import {updateObject} from '../../../utils/utils';

const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";
const SET_PLANET = "SET_PLANET";
export const SET_RERENDER_PERIOD = "SET_RERENDER_PERIOD";
export const FETCH_RANDOM_PLANET = "FETCH_RANDOM_PLANET";

const initialState = {
    planet: {},
    isLoading: false,
    isError: false,
    rerenderInterval: null
};

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const setError = (error) => ({type: SET_ERROR, error});
export const setPlanet = (planet) => ({type: SET_PLANET, planet});
export const setRerenderPeriod = (interval) => ({type: SET_RERENDER_PERIOD, interval});

export const fetchRandomPlanet = () => ({type: FETCH_RANDOM_PLANET});

const randomPlanetReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_IS_LOADING:
            return updateObject(state, {isLoading: action.isLoading});
        case SET_ERROR:
            return updateObject(state, {error: action.error});
        case SET_PLANET:
            return updateObject(state, {planet: action.planet})
        case SET_RERENDER_PERIOD:
            console.log(action)
            return updateObject(state, {rerenderInterval: action.interval})
        default:
            return state;
    }
};

export default randomPlanetReducer;

