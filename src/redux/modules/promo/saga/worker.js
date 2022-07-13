import {fork, put} from 'redux-saga/effects'
import { getPlanetsByIdWorker } from '../../planet/saga/workers';
import { getStarshipByIdWorker } from '../../starship/saga/workers';
import { getPersonByIdWorker } from '../../person/saga/workers';
import {getRandomEntityId} from '../../../../utils/commonUtils';
import {loadPromoError} from '../actions/actions';

function* promoWorker() {
    try {
        yield fork(getStarshipByIdWorker, getRandomEntityId('starships'));
        yield fork(getPlanetsByIdWorker, getRandomEntityId('planets'));
        yield fork(getPersonByIdWorker, getRandomEntityId('persons'));

    } catch (error) {
        yield put(loadPromoError());
    }
};

export default promoWorker;
