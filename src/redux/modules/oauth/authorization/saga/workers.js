import {loginUserRequest, loginUserSuccess, loginUserFail, logoutUserSuccess} from '../actions/actions'
import authService from '../../../../../services/auth-service/authService';
import tokenService from '../../../../../services/token-service/tokenService'
import {put, call} from 'redux-saga/effects';

export function* loginUserWorker(action) {
    try {
        yield put(loginUserRequest());
       const result = yield call(authService.login, action.username, action.password);
       tokenService.setAccessToken(result.accessToken);
       tokenService.setRefreshToken(result.refreshToken);
       yield put(loginUserSuccess())
    } catch (error) {
        loginUserFail(error);
    }
};

export function* logoutUserWorker() {
       tokenService.removeAccessToken();
       tokenService.removeRefreshToken();
       yield put(logoutUserSuccess());

}


