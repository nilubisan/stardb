import { fork, call, put, delay, all } from 'redux-saga/effects'
import api from './somewhere/api' // app specific
import { receiveData } from './somewhere/actions' // app specific

function* fetchAll() {
    const task1 = yield fork(fetchResource, 'users')
    const task2 = yield fork(fetchResource, 'comments')
    yield delay(1000)
}

function* fetchAll1() {
    yield all([
        call(fetchResource, 'users'),
        call(fetchResource, 'comments'),
        delay(1000)
    ])
}

function* fetchResource(resource) {
    const {data} = yield call(api.fetch, resource)
    yield put(receiveData(data))
}

function* main() {
    yield call(fetchAll)
}