import { FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import { fetchPersonsByPageNumberWorker } from '../saga/workers';
import {takeLatest} from 'redux-saga/effects';

export function* fetchPersonsByPageNumberWatcher() {
    yield takeLatest(FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST, fetchPersonsByPageNumberWorker);
};