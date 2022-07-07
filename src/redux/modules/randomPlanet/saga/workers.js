import { getRandomPlanetId } from '../../../../utils/randomPlanetUtils'
import swapiService from '../../../../services/swapiService'
import {setIsLoading, setPlanet, setError} from '../actions/actions';
import {call, put} from 'redux-saga/effects';

function* fetchRandomPlanet() {
    try {
        const id = getRandomPlanetId();
        yield put(setIsLoading(true));
        const planet = yield call(swapiService.getPlanet.bind(swapiService), id);
        yield put(setIsLoading(false));
        yield put(setPlanet(planet));
    } catch(e) {
        yield put(setError(e));
    }
};

export default fetchRandomPlanet;