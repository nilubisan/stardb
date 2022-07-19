import { initPromoWatcher } from '../../promo/saga/watcher';
import { fetchPersonsByPageNumberWatcher } from '../../person/getAll/saga/watchers';
import { fetchStarshipsByPageNumberWatcher} from '../../starship/getAll/saga/watchers';
import { fetchPlanetsByPageNumberWatcher} from '../../planet/getAll/saga/watchers';
import { loginWatcher } from '../../oauth/authorization/saga/watchers';
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        loginWatcher(),
        initPromoWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher(),
        fetchPlanetsByPageNumberWatcher()
    ])
}

export default rootSaga;