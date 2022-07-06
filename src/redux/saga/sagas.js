import {call, put, takeEvery} from 'redux-saga/effects';
import swapiService from "../../services/swapiService";
import {getRandomPlanetId} from '../../utils/utils';
import { setIsLoading, setError, setPlanet} from "../reducers/randomPlanet/randomPlanetReducer"
import {FETCH_RANDOM_PLANET} from '../reducers/randomPlanet/randomPlanetReducer';

function* fetchRandomPlanet() {
    try {
        const id = getRandomPlanetId();
        yield put(setIsLoading(true));
        const planet = yield call(swapiService.getPlanet.bind(swapiService), id);
        yield put(setIsLoading(false));
        yield put(setPlanet(planet));
    } catch(e) {
        yield put(setError(e))
    }
}

function* mySaga() {
    yield takeEvery(FETCH_RANDOM_PLANET, fetchRandomPlanet)
}

export default mySaga;