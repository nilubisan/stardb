import {fork, put} from 'redux-saga/effects'
import { getPlanetsByIdWorker } from '../../planet/saga/workers';
import { getStarshipByIdWorker } from '../../starship/saga/workers';
import { getPersonByIdWorker } from '../../person/saga/workers';
import {getRandomEntityId} from '../../../../utils/commonUtils';
import {loadPromoError} from '../actions/actions';

function* promoWorker() {
    console.log("start")
    try {
        yield fork(getPlanetsByIdWorker, getRandomEntityId('planets'));
        yield fork(getStarshipByIdWorker, getRandomEntityId('starships'));
        yield fork(getPersonByIdWorker, getRandomEntityId('persons'));
    } catch (error) {
        yield put(loadPromoError());
    }
};

export default promoWorker;
