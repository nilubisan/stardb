import swapiService from '../../../../services/swapiService';
import {setIsLoading, setError} from '../../common/actions/actions'
import {setPersons, setPage} from "../actions/actions";
import {put, call} from "redux-saga/effects"


function* fetchPersonsByPageNumber(action) {
    try {
        yield put(setPage(action.pageNumber));
        yield put(setIsLoading(true));
        const result = yield call(swapiService.getPersonsByPageNumber.bind(swapiService), action.pageNumber);
        yield put(setIsLoading(false));
        yield put(setPersons(result));
    } catch(e) {
        yield put(setError(e));
    }
};

export default fetchPersonsByPageNumber;
