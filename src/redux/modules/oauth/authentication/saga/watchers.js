import {takeLatest} from 'redux-saga/effects';
import authenticateUserWorker from './workers'

function* authenticateUserWatcher() {
    yield takeLatest("AUTHENTICATE_USER", authenticateUserWorker)
}

export default authenticateUserWatcher;