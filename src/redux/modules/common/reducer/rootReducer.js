import { combineReducers } from "redux";
import randomPlanetReducer from "../../randomPlanet/reducers/randomPlanetReducer";
import personsReducers from '../../persons/reducers/personsReducers'
import starshipsReducers from '../../starships/reducers/starshipsReducers';
import planetsReducers from '../../planets/reducers/planetsReducers'

export default combineReducers({
    randomPlanet: randomPlanetReducer,
    persons: personsReducers,
    starships: starshipsReducers,
    planets: planetsReducers
});