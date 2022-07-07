import {createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import randomPlanetReducer from './modules/randomPlanet/reducers/randomPlanetReducer';
import rootSaga from './modules/common/saga/watchers';
import rootReducer from './modules/common/reducer/rootReducer';

console.log(combineReducers({randomPlanetReducer}));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
