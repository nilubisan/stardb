import { combineReducers } from "redux";
import randomPlanetReducer from "../../randomPlanet/reducers/randomPlanetReducer";

export default combineReducers({
    randomPlanet: randomPlanetReducer
});