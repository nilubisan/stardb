import tokenService from '../../../../services/token-service/tokenService'
import authService from '../../../../services/auth-service/authService'
import { setAppInitialized, setAuthStatus } from '../actions/actions'
import { call, put } from 'redux-saga/effects'

export function* initializeAppWorker() {
    let accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();
    if(!accessToken && !refreshToken) yield put(setAuthStatus(false));
    if(accessToken) {
        const isAccessTokenValid = yield call(authService.checkAccessToken, accessToken)
        if(isAccessTokenValid) {
            yield put(setAuthStatus(true))
        } else {
            accessToken = null;
        }
    }
    if(!accessToken && refreshToken) {
        const tokens = yield call(authService.refreshToken, refreshToken)
        if(tokens) {
            tokenService.setAccessToken(tokens["x-satrap-1"])
            tokenService.setRefreshToken(tokens["x-satrap-2"])
            yield put(setAuthStatus(true))
        } else {
            yield put(setAuthStatus(false))
        }
    }
    yield put(setAppInitialized())
}