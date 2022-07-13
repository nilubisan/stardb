import swapiService from '../../../../../services/swapiService'
import { call, put } from 'redux-saga/effects'
import {
    changeCurrentPlanetsPageNumber,
    loadPlanetsFailure,
    loadPlanetsRequest,
    loadPlanetsSuccess,
} from '../actions/actions'


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