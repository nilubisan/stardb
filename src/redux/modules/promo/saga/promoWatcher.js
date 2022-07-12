import { INIT_PROMO_REQUEST } from '../actions/actionTypes';
import promoWorker from '../saga/workers';
import {takeLatest} from 'redux-saga/effects';

export function* promoWatcher() {
    yield takeLatest(INIT_PROMO_REQUEST, promoWorker);
}