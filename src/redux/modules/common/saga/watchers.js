import { watchFetchRandomPlanet } from '../../randomPlanet/saga/watchers'
import {all} from 'redux-saga/effects'

function* rootSaga() {
    yield all([
        watchFetchRandomPlanet()
    ])
};

export default rootSaga;