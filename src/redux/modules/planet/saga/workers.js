import swapiService from '../../../../services/swapiService'
import {
    changeCurrentPlanetsPageNumber,
    loadPlanetsFailure,
    loadPlanetsRequest,
    loadPlanetsSuccess,
} from '../actions/actions'
import { call, put } from 'redux-saga/effects'
import {
    loadPersonsFailure,
    loadPersonsRequest,
    loadPersonsSuccess
} from '../../persons/actions/actions'


export function* fetchPlanetsByPageNumberWorker(action) {
    try {
        yield put(changeCurrentPlanetsPageNumber(action.pageNumber))
        yield put(loadPlanetsRequest())
        const result = yield call(swapiService.getPlanetsByPageNumber.bind(swapiService), action.pageNumber)
        yield put(loadPlanetsSuccess(result))
    } catch (error) {
        yield put(loadPlanetsFailure(error))
    }
}

export function* getPlanetsByIdWorker(planetId) {
    try{
        yield put(loadPlanetsRequest());
        const planet = yield call(swapiService.getPlanetById.bind(swapiService), planetId);
        yield put(loadPlanetsSuccess(planet));
    } catch(error) {
        yield put(loadPlanetsFailure(error));
    }
}