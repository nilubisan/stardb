import {
    CHANGE_CURRENT_PERSONS_PAGE_NUMBER,
    LOAD_PERSONS_FAILURE,
    LOAD_PERSONS_REQUEST,
    LOAD_PERSONS_SUCCESS,
    LOAD_PERSON_SUCCESS
} from '../actions/actionTypes'
import { updateObject } from '../../../../utils/commonUtils'

const initialState = {
    promoPerson: null,
    currentPageNumber: 1,
    pageCount: null,
    persons: null,
    loading: false,
    error: false
}

const personsReducers = (state = initialState, action) => {
    if(typeof action === 'undefined') return state
    switch (action.type) {
        case CHANGE_CURRENT_PERSONS_PAGE_NUMBER:
            return updateObject(state, { currentPageNumber: action.pageNumber })
        case LOAD_PERSONS_REQUEST:
            return updateObject(state, { loading: true })
        case LOAD_PERSONS_SUCCESS:
            const { persons, pageCount } = action.result
            return updateObject(state, { loading: false, persons, pageCount })
        case LOAD_PERSON_SUCCESS:
            return updateObject(state, { loading: false, promoPerson: action.person })
        case LOAD_PERSONS_FAILURE:
            return updateObject(state, { loading: false, error: action.error })
        default:
            return state
    }
}

export default personsReducers