import { takeLatest } from 'redux-saga/effects';
import { LOGIN_USER} from '../actions/actionTypes';
import loginUserWorker from './loginUserWorker'

function* loginUserWatcher() {
    yield takeLatest(LOGIN_USER, loginUserWorker);
}

export default loginUserWatcher