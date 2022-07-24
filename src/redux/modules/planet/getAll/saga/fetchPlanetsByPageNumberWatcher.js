import { FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchPlanetsByPageNumberWorker from './fetchPlanetsByPageNumberWorker';
import {takeLatest} from 'redux-saga/effects';

function* fetchPlanetsByPageNumberWatcher() {
    yield takeLatest(FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST, fetchPlanetsByPageNumberWorker);
};

export default fetchPlanetsByPageNumberWatcher;

