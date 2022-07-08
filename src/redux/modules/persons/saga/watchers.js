import { FETCH_PERSONS_BY_PAGE_NUMBER } from "../actions/actionTypes";
import fetchPersonsByPageNumber from '../saga/workers';
import {takeEvery} from 'redux-saga/effects';

export function* watchFetchPersonsByPageNumber() {
    yield takeEvery(FETCH_PERSONS_BY_PAGE_NUMBER, fetchPersonsByPageNumber);
};