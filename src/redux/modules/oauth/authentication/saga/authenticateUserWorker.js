import tokenService from '../../../../../services/token-service/tokenService'
import { setAuthStatus } from '../../authorization/actions/actions'
import authService from '../../../../../services/auth-service/authService'
import {setAuthenticationIsInProgress} from '../actions/actions'
import { call, put } from 'redux-saga/effects'

function* authenticateUserWorker() {
    yield put(setAuthenticationIsInProgress(true));
    try {
        let accessToken = tokenService.getAccessToken()
        const refreshToken = tokenService.getRefreshToken()
        if(!accessToken && !refreshToken) yield put(setAuthStatus(false))
        if(accessToken) {
            const isAccessTokenValid = yield call(authService.checkAccessToken, accessToken)
            if(isAccessTokenValid) {
                yield put(setAuthStatus(true))
            } else {
                accessToken = null
            }
        }
        if(!accessToken && refreshToken) {
            const tokens = yield call(authService.refreshToken, refreshToken)
            if(tokens) {
                tokenService.setAccessToken(tokens["accessToken"])
                tokenService.setRefreshToken(tokens["refreshToken"])
                yield put(setAuthStatus(true))
                return
            }
            yield put(setAuthStatus(false))
        }
    } finally {
        yield put(setAuthenticationIsInProgress(false));
    }
}

export default authenticateUserWorker