import { watchFetchRandomPlanet } from '../../randomPlanet/saga/watchers'
import {watchFetchPersonsByPageNumber} from '../../persons/saga/watchers';
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        watchFetchRandomPlanet(),
        watchFetchPersonsByPageNumber()
    ])
}

export default rootSaga;