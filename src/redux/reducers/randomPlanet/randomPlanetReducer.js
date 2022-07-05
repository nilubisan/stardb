const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";
const SET_PLANET = "SET_PLANET";

const defaultState = {
    planet: {},
    isLoading: false,
    isError: false
};

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const setError = (error) => ({type: SET_ERROR, error});
export const setPlanet = (planet) => ({type: SET_PLANET, planet});

const randomPlanetReducer = (state=defaultState, action) => {
    switch(action) {
        case(SET_IS_LOADING):
            state.isLoading = action.isLoading;
            break;
        case(SET_ERROR):
            state.error = action.error;
            state.isLoading = false;
            break;

        case(SET_PLANET):
            state.planet = action.planet;
            break;

        default:
            return state;
    }
};

export default randomPlanetReducer;

