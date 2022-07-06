import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import randomPlanetReducer from './reducers/randomPlanet/randomPlanetReducer';
import mySaga from './saga/sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(randomPlanetReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
export default store;
