import { put } from 'redux-saga/effects'
import { setAuthStatus } from '../actions/actions'
import tokenService from '../../../../../services/token-service/tokenService'

function* logoutUserWorker() {
    tokenService.removeAccessToken()
    tokenService.removeRefreshToken()
    yield put(setAuthStatus(false))
};

export default logoutUserWorker;