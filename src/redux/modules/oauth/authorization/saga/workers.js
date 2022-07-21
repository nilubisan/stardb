import {
    loginUserFail,
    loginUserRequest,
    loginUserSuccess,
    setAuthStatus
} from '../actions/actions'
import authService from '../../../../../services/auth-service/authService'
import tokenService from '../../../../../services/token-service/tokenService'
import { call, put } from 'redux-saga/effects'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const redirectAfterEvent = (event) => {
    switch (event) {
        case LOGIN:
             window.location.href = '/'
            break
        case LOGOUT:
            window.location.href = '/'
            break
        default:
            break
    }

}


export function* loginUserWorker(action) {
    yield put(loginUserRequest())
    try {
        const result = yield call(authService.login, action.username, action.password)
        tokenService.setAccessToken(result.accessToken)
        tokenService.setRefreshToken(result.refreshToken)
        yield put(loginUserSuccess())
        redirectAfterEvent(LOGIN)
    } catch (e) {
        let errorMessage;
        if (e.response.status === 401) {
            errorMessage = "Error occurred! The username or password are incorrect";
        } else {
            errorMessage = "Error occurred! Please try later";
        }
        yield put(loginUserFail(errorMessage))
    }
}

export function* logoutUserWorker() {
    tokenService.removeAccessToken()
    tokenService.removeRefreshToken()
    yield put(setAuthStatus(false))
    redirectAfterEvent(LOGOUT)
}


