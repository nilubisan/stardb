import { combineReducers } from "redux";
import personsReducers from '../../person/reducers/personsReducers'
import starshipsReducers from '../../starship/reducers/starshipsReducers';
import planetsReducers from '../../planet/reducers/planetsReducers'
import promoReducer from '../../promo/reducers/promoReducer'

export default combineReducers({
    persons: personsReducers,
    starships: starshipsReducers,
    planets: planetsReducers,
    promo: promoReducer
});