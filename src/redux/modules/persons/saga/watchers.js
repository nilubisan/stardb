import { FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchPersonsByPageNumber from '../saga/workers';
import {takeEvery} from 'redux-saga/effects';

export function* fetchPersonsByPageNumberWatcher() {
    yield takeEvery(FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST, fetchPersonsByPageNumber);
};