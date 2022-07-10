import swapiService from '../../../../services/swapiService';
import {changeCurrentPageNumber, loadPersonsRequest, loadPersonsSuccess, loadPersonsFailure, } from '../actions/actions';
import {put, call} from "redux-saga/effects";


function* fetchPersonsByPageNumberWorker(action) {
    try {
        yield put(changeCurrentPageNumber(action.pageNumber));
        yield put(loadPersonsRequest());
        const result = yield call(swapiService.getPersonsByPageNumber.bind(swapiService), action.pageNumber);
        yield put(loadPersonsSuccess(result));
    } catch(error) {
        yield put(loadPersonsFailure(error));
    }
};

export default fetchPersonsByPageNumberWorker;
