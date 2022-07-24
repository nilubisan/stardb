import { takeLatest } from 'redux-saga/effects';
import { LOGOUT_USER } from '../actions/actionTypes';
import logoutUserWorker from './logoutUserWorker';

function* logoutUserWatcher() {
    yield takeLatest(LOGOUT_USER, logoutUserWorker);
};

export default logoutUserWatcher;