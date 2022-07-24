import { FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST } from "../actions/actionTypes";
import fetchStarshipsByPageNumberWorker from './fetchStarshipsByPageNumberWorker';
import {takeLatest} from 'redux-saga/effects';

function* fetchStarshipsByPageNumberWatcher() {
    yield takeLatest(FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST, fetchStarshipsByPageNumberWorker);
};

export default fetchStarshipsByPageNumberWatcher;