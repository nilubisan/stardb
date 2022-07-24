import { FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchPersonsByPageNumberWorker from './fetchPersonsByPageNumberWorker';
import {takeLatest} from 'redux-saga/effects';

function* fetchPersonsByPageNumberWatcher() {
    yield takeLatest(FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST, fetchPersonsByPageNumberWorker);
};

export default fetchPersonsByPageNumberWatcher;