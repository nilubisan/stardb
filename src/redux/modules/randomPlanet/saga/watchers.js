import { FETCH_RANDOM_PLANET_REQUEST } from '../actions/actionTypes';
import fetchRandomPlanetWorker from '../saga/workers';
import {takeLatest} from 'redux-saga/effects';

export function* fetchRandomPlanetWatcher() {
    yield takeLatest(FETCH_RANDOM_PLANET_REQUEST, fetchRandomPlanetWorker);
}