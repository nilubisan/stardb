import { INIT_PROMO_REQUEST } from '../actions/actionTypes';
import promoWorker from './promoWorker';
import {takeLatest} from 'redux-saga/effects';

function* initPromoWatcher() {
    yield takeLatest(INIT_PROMO_REQUEST, promoWorker);
}

export default initPromoWatcher;