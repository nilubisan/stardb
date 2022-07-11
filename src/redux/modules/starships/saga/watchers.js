import { FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchStarshipsByPageNumber from '../saga/workers';
import {takeEvery} from 'redux-saga/effects';

export function* fetchStarshipsByPageNumberWatcher() {
    yield takeEvery(FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST, fetchStarshipsByPageNumber);
};