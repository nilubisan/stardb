import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import randomPlanetReducer from './modules/randomPlanet/reducers/randomPlanetReducer';
import rootSaga from './modules/common/saga/watchers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(randomPlanetReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
