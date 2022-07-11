import swapiService from '../../../../services/swapiService'
import {
    changeCurrentPersonsPageNumber,
    loadPersonsFailure,
    loadPersonsRequest,
    loadPersonsSuccess,
} from '../actions/actions'
import { call, put } from 'redux-saga/effects'


function* fetchPersonsByPageNumberWorker(action) {
    try {
        yield put(changeCurrentPersonsPageNumber(action.pageNumber))
        yield put(loadPersonsRequest())
        const result = yield call(swapiService.getPersonsByPageNumber.bind(swapiService), action.pageNumber)
        yield put(loadPersonsSuccess(result))
    } catch (error) {
        yield put(loadPersonsFailure(error))
    }
}

export default fetchPersonsByPageNumberWorker
