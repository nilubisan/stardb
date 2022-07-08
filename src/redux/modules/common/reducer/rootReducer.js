import { combineReducers } from "redux";
import randomPlanetReducer from "../../randomPlanet/reducers/randomPlanetReducer";
import personsReducers from '../../persons/reducers/personsReducers'

export default combineReducers({
    randomPlanet: randomPlanetReducer,
    persons: personsReducers
});