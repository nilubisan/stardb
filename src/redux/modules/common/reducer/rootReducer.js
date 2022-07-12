import { combineReducers } from "redux";
import promoReducer from "../../promo/reducers/promoReducer";
import personsReducers from '../../persons/reducers/personsReducers'
import starshipsReducers from '../../starships/reducers/starshipsReducers';
import planetsReducers from '../../planet/reducers/planetsReducers'

export default combineReducers({
    randomPlanet: promoReducer,
    persons: personsReducers,
    starships: starshipsReducers,
    planets: planetsReducers
});