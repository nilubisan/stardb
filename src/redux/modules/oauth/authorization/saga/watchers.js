import {takeLatest} from 'redux-saga/effects';
import { LOGIN_USER, LOGOUT_USER} from '../actions/actionTypes';
import { loginUserWorker, logoutUserWorker } from './workers'

export function* loginWatcher() {
    yield takeLatest(LOGIN_USER, loginUserWorker);
    yield takeLatest(LOGOUT_USER, logoutUserWorker);
}