import { FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchPlanetsByPageNumber from './workers';
import {takeLatest} from 'redux-saga/effects';

export function* fetchPlanetsByPageNumberWatcher() {
    yield takeLatest(FETCH_PLANETS_BY_PAGE_NUMBER_REQUEST, fetchPlanetsByPageNumber);
};