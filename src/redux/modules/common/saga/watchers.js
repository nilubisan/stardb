import { fetchRandomPlanetWatcher } from '../../randomPlanet/saga/watchers'
import { fetchPersonsByPageNumberWatcher } from '../../persons/saga/watchers';
import { fetchStarshipsByPageNumberWatcher} from '../../starships/saga/watchers'
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        fetchRandomPlanetWatcher(),
        fetchPersonsByPageNumberWatcher(),
        fetchStarshipsByPageNumberWatcher()
    ])
}

export default rootSaga;