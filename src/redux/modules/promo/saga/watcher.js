import { INIT_PROMO_REQUEST } from '../actions/actionTypes';
import promoWorker from './worker';
import {takeLatest} from 'redux-saga/effects';

export function* initPromoWatcher() {
    yield takeLatest(INIT_PROMO_REQUEST, promoWorker);
}