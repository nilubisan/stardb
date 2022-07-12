import { getRandomPlanetId } from '../../../../utils/randomPlanetUtils'
import swapiService from '../../../../services/swapiService'
import { loadPlanetRequest, loadPlanetSuccess, loadPlanetFailure } from '../actions/actions';
import {call, put} from 'redux-saga/effects';

function* fetchRandomPlanetWorker() {
    try {
        const id = getRandomPlanetId();
        yield put(loadPlanetRequest());
        const planet = yield call(swapiService.getPlanet.bind(swapiService), id);
        yield put(loadPlanetSuccess(planet));
    } catch(error) {
        yield put(loadPlanetFailure(error));
    }
};

export default fetchRandomPlanetWorker;