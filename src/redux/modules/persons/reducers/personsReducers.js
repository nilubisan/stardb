import { SET_ERROR, SET_IS_LOADING } from '../../common/actions/actionTypes'
import { SET_PAGE, SET_PERSONS } from '../actions/actionTypes'
import { updateObject } from '../../../../utils/commonUtils'

const initialState = {
    currentPage: 1,
    pageCount: null,
    persons: null,
    isLoading: false,
    isError: false
};

const personsReducers = (state = initialState, action) => {
    if(typeof action === 'undefined') return state;
    switch (action.type) {
        case SET_IS_LOADING:
            return updateObject(state, { isLoading: action.isLoading })
        case SET_ERROR:
            return updateObject(state, { error: action.error })
        case SET_PAGE:
            return updateObject(state, { currentPage: action.page })
        case SET_PERSONS:
            const {persons, pageCount} = action.result;
            return updateObject(state, { persons, pageCount })
        default:
            return state;
    }
};

export default personsReducers;