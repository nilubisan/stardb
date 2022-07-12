import { fetchRandomPlanetWatcher } from '../../promo/saga/promoWatcher';
import { fetchPersonsByPageNumberWatcher } from '../../persons/saga/watchers';
import { fetchStarshipsByPageNumberWatcher} from '../../starships/saga/watchers';
import { fetchPlanetsByPageNumberWatcher} from '../../planet/saga/watchers';
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        fetchRandomPlanetWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher(),
        fetchPlanetsByPageNumberWatcher()
    ])
}

export default rootSaga;