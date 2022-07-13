import { CHANGE_CURRENT_STARSHIPS_PAGE_NUMBER, LOAD_STARSHIPS_REQUEST, LOAD_STARSHIPS_SUCCESS, LOAD_STARSHIPS_FAILURE } from '../actions/actionTypes';
import { updateObject } from '../../../../../utils/commonUtils';

const initialState = {
    currentPageNumber: 1,
    pageCount: null,
    starships: null,
    loading: false,
    error: false
};

const starshipsReducers = (state = initialState, action) => {
    if(typeof action === 'undefined') return state;
    switch (action.type) {
        case CHANGE_CURRENT_STARSHIPS_PAGE_NUMBER:
            return updateObject(state, { currentPageNumber: action.pageNumber })
        case LOAD_STARSHIPS_REQUEST:
            return updateObject(state, { loading: true })
        case LOAD_STARSHIPS_SUCCESS:
            const {starships, pageCount} = action.result;
            return updateObject(state, { loading: false, starships, pageCount })
        case LOAD_STARSHIPS_FAILURE:
            return updateObject(state, { loading: false, error: action.error })
        default:
            return state;
    }
};

export default starshipsReducers;