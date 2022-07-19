import {takeLatest} from 'redux-saga/effects';
import { LOGIN_USER} from '../actions/actionTypes';
import { loginUserWorker } from './workers'

export function* loginWatcher() {
    yield takeLatest(LOGIN_USER, loginUserWorker);
}