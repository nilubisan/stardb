import { FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchPlanetsByPageNumber from '../saga/workers';
import {takeEvery} from 'redux-saga/effects';

export function* fetchPlanetsByPageNumberWatcher() {
    yield takeEvery(FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST, fetchPlanetsByPageNumber);
};