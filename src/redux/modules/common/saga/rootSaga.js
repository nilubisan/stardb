import initPromoWatcher from '../../promo/saga/initPromoWatcher';
import fetchPersonsByPageNumberWatcher from '../../person/getAll/saga/fetchPersonsByPageNumberWatcher';
import fetchStarshipsByPageNumberWatcher from '../../starship/getAll/saga/fetchStarshipsByPageNumberWatcher';
import fetchPlanetsByPageNumberWatcher from '../../planet/getAll/saga/fetchPlanetsByPageNumberWatcher';
import loginWatcher from '../../oauth/authorization/saga/loginUserWatcher';
import logoutWatcher from '../../oauth/authorization/saga/logoutUserWatcher';
import authenticateUserWatcher from '../../oauth/authentication/saga/authenticateUserWatcher';
import {all} from 'redux-saga/effects';
import initializeAppWatcher from '../../app/saga/initializeAppWatcher';

function* rootSaga() {
    yield all([
        initializeAppWatcher(),
        loginWatcher(),
        logoutWatcher(),
        initPromoWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher(),
        fetchPlanetsByPageNumberWatcher(),
        authenticateUserWatcher()
    ])
}

export default rootSaga;