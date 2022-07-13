import swapiService from '../../../../services/swapiService'
import {
    changeCurrentStarshipsPageNumber,
    loadStarshipsFailure,
    loadStarshipsRequest,
    loadStarshipsSuccess,
} from '../actions/actions'
import { call, put } from 'redux-saga/effects'

export function* fetchStarshipsByPageNumberWorker(action) {
    try {
        yield put(changeCurrentStarshipsPageNumber(action.pageNumber))
        yield put(loadStarshipsRequest())
        const result = yield call(swapiService.getStarshipsByPageNumber.bind(swapiService), action.pageNumber)
        yield put(loadStarshipsSuccess(result))
    } catch (error) {
        yield put(loadStarshipsFailure(error))
    }
}