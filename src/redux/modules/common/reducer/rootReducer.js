import { combineReducers } from "redux";
import personsReducers from '../../person/getAll/reducers/personsReducers'
import starshipsReducers from '../../starship/getAll/reducers/starshipsReducers';
import planetsReducers from '../../planet/getAll/reducers/planetsReducers'
import promoReducer from '../../promo/reducers/promoReducer'

export default combineReducers({
    persons: personsReducers,
    starships: starshipsReducers,
    planets: planetsReducers,
    promo: promoReducer
});