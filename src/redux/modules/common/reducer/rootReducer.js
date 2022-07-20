import { combineReducers } from "redux";
import personsReducers from '../../person/getAll/reducers/personsReducers'
import starshipsReducers from '../../starship/getAll/reducers/starshipsReducers';
import planetsReducers from '../../planet/getAll/reducers/planetsReducers'
import promoReducer from '../../promo/reducers/promoReducer'
import loginReducer from '../../oauth/authorization/reducers/authorizationReducer'
import appReducer from '../../app/reducers/appReducer'

export default combineReducers({
    app: appReducer,
    persons: personsReducers,
    starships: starshipsReducers,
    planets: planetsReducers,
    promo: promoReducer,
    login: loginReducer
});