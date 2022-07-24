import { INITIALIZE_APP } from '../actions/actionTypes';
import {takeLatest} from 'redux-saga/effects'
import initializeAppWorker from './initializeAppWorker'

function* initializeAppWatcher() {
    yield takeLatest(INITIALIZE_APP, initializeAppWorker);
};

export default initializeAppWatcher;