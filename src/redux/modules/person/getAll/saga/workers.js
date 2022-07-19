import swapiService from '../../../../../services/swapi-service/swapiService';
import {
    changeCurrentPersonsPageNumber,
    loadPersonsFailure,
    loadPersonsRequest,
    loadPersonsSuccess,
    loadPersonSuccess
} from '../actions/actions';
import { call, put } from 'redux-saga/effects';

export function* fetchPersonsByPageNumberWorker(action) {
    try {
        yield put(changeCurrentPersonsPageNumber(action.pageNumber))
        yield put(loadPersonsRequest())
        const result = yield call(swapiService.getPersonsByPageNumber.bind(swapiService), action.pageNumber)
        yield put(loadPersonsSuccess(result))
    } catch (error) {
        yield put(loadPersonsFailure(error))
    }
}

export function* getPersonByIdWorker(personId) {
    try{
        yield put(loadPersonsRequest());
        const person = yield call(swapiService.getPersonById.bind(swapiService), personId);
        yield put(loadPersonSuccess(person));
    } catch(error) {
        yield put(loadPersonsFailure(error));
    }
};
