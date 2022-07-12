import {fork, put} from 'redux-saga/effects'
import { getPlanetsByIdWorker } from '../../planet/saga/workers';
import { starshipWorker } from '';
import { getPersonByIdWorker } from '../../persons/saga/workers';
import {getRandomEntityId} from '../../../../utils/commonUtils';
import {loadPromoError} from '../actions/actions';

function* promoWorker() {
    try {
        yield fork(getPlanetsByIdWorker, getRandomEntityId('planets'));
        yield fork(starshipWorker, getRandomEntityId('starships'));
        yield fork(getPersonByIdWorker, getRandomEntityId('persons'));
    } catch (error) {
        yield put(loadPromoError());
    }
};

export default promoWorker;

//         const id = getRandomPlanetId();
//         yield put(loadPlanetRequest());
//         const planet = yield call(swapiService.getPlanet.bind(swapiService), id);
//         yield put(loadPlanetSuccess(planet));
//     } catch(error) {
//         yield put(loadPlanetFailure(error));
//     }
// }

