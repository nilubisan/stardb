import { initPromoWatcher } from '../../promo/saga/watcher';
import { fetchPersonsByPageNumberWatcher } from '../../person/getAll/saga/watchers';
import { fetchStarshipsByPageNumberWatcher} from '../../starship/getAll/saga/watchers';
import { fetchPlanetsByPageNumberWatcher} from '../../planet/getAll/saga/watchers';
import { loginWatcher } from '../../oauth/authorization/saga/watchers';
import authenticateUserWatcher from '../../oauth/authentication/saga/watchers'
import {all} from 'redux-saga/effects'
import { initializeAppWatcher } from '../../app/saga/watchers'

function* rootSaga() {
    yield all([
        initializeAppWatcher(),
        loginWatcher(),
        initPromoWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher(),
        fetchPlanetsByPageNumberWatcher(),
        authenticateUserWatcher()
    ])
}

export default rootSaga;