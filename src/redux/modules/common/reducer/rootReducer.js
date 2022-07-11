import { combineReducers } from "redux";
import randomPlanetReducer from "../../randomPlanet/reducers/randomPlanetReducer";
import personsReducers from '../../persons/reducers/personsReducers'
import starshipsReducers from '../../starships/reducers/starshipsReducers'

export default combineReducers({
    randomPlanet: randomPlanetReducer,
    persons: personsReducers,
    starships: starshipsReducers
});