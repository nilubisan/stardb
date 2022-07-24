import { setAppInitialized} from '../actions/actions'
import { put } from 'redux-saga/effects'

import {authenticateUser}from '../../oauth/authentication/actions/actions';


function* initializeAppWorker() {
    yield put(authenticateUser());
    yield put(setAppInitialized())
};

export default initializeAppWorker;