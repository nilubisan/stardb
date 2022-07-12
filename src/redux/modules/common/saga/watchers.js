import { initPromoWatcher } from '../../promo/saga/watcher';
import { fetchPersonsByPageNumberWatcher } from '../../person/saga/watchers';
import { fetchStarshipsByPageNumberWatcher} from '../../starship/saga/watchers';
import { fetchPlanetsByPageNumberWatcher} from '../../planet/saga/watchers';
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        initPromoWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher(),
        fetchPlanetsByPageNumberWatcher()
    ])
}

export default rootSaga;