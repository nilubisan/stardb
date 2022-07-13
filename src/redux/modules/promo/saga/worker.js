import {fork, put, call} from 'redux-saga/effects'
import {getRandomEntityId} from '../../../../utils/commonUtils';
import {loadPromoError} from '../actions/actions';
import swapiService from '../../../../services/swapiService';
import {loadPlanetRequest, loadPlanetSuccess, loadPlanetFailure, loadPersonRequest, loadPersonSuccess, loadPersonFailure, loadStarshipRequest, loadStarshipSuccess, loadStarshipFailure} from '../actions/actions';

function* promoWorker() {
    try {
        yield fork(getStarshipByIdWorker, getRandomEntityId('starships'));
        yield fork(getPlanetByIdWorker, getRandomEntityId('planets'));
        yield fork(getPersonByIdWorker, getRandomEntityId('persons'));

    } catch (error) {
        yield put(loadPromoError());
    }
};

function* getPlanetByIdWorker(planetId) {
    try{
        yield put(loadPlanetRequest());
        const planet = yield call(swapiService.getPlanetById.bind(swapiService), planetId);
        yield put(loadPlanetSuccess(planet));
    } catch(error) {
        yield put(loadPlanetFailure(error));
    }
};

function* getStarshipByIdWorker(starshipId) {
    try{
        yield put(loadStarshipRequest());
        const starship = yield call(swapiService.getStarshipById.bind(swapiService), starshipId);
        yield put(loadStarshipSuccess(starship));
    } catch(error) {
        yield put(loadStarshipFailure(error));
    }
}

function* getPersonByIdWorker(personId) {
    try{
        yield put(loadPersonRequest());
        const person = yield call(swapiService.getPersonById.bind(swapiService), personId);
        yield put(loadPersonSuccess(person));
    } catch(error) {
        yield put(loadPersonFailure(error));
    }
};


export default promoWorker;
