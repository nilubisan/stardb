import {createStore} from 'redux';
import randomPlanetReducer from './reducers/randomPlanet/randomPlanetReducer';

const store = createStore(randomPlanetReducer);
export default store;
