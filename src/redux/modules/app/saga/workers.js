import { setAppInitialized} from '../actions/actions'
import { put } from 'redux-saga/effects'

import {authenticateUser}from '../../oauth/authentication/actions/actions';


export function* initializeAppWorker() {
    yield put(authenticateUser());
    yield put(setAppInitialized())
}