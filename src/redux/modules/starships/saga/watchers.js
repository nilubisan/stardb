import { FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchStarshipsByPageNumber from '../saga/workers';
import {takeLatest} from 'redux-saga/effects';

export function* fetchStarshipsByPageNumberWatcher() {
    yield takeLatest(FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST, fetchStarshipsByPageNumber);
};