import { FETCH_RANDOM_PLANET } from '../actions/actionTypes';
import fetchRandomPlanet from '../saga/workers';
import {takeEvery} from 'redux-saga/effects';

export function* watchFetchRandomPlanet() {
    yield takeEvery(FETCH_RANDOM_PLANET, fetchRandomPlanet);
}