import { put } from 'redux-saga/effects'
import { logoutUserRequest, logoutUserSuccess } from '../actions/actions'
import tokenService from '../../../../../services/token-service/tokenService'

function* logoutUserWorker() {
    yield put(logoutUserRequest())
    tokenService.removeAccessToken()
    tokenService.removeRefreshToken()
    yield put(logoutUserSuccess());
};

export default logoutUserWorker;