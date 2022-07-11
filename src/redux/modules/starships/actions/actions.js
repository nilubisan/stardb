import {CHANGE_CURRENT_STARSHIPS_PAGE_NUMBER, LOAD_STARSHIPS_REQUEST, LOAD_STARSHIPS_SUCCESS, LOAD_STARSHIPS_FAILURE, FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST} from './actionTypes';

export const changeCurrentStarshipsPageNumber = (pageNumber) => ({type: CHANGE_CURRENT_STARSHIPS_PAGE_NUMBER, pageNumber});
export const loadStarshipsRequest = () => ({type: LOAD_STARSHIPS_REQUEST});
export const loadStarshipsSuccess = (result) => ({type: LOAD_STARSHIPS_SUCCESS, result});
export const loadStarshipsFailure = (error) => ({type: LOAD_STARSHIPS_FAILURE, error});
export const fetchStarshipsByPageNumberRequest = (pageNumber) => ({type: FETCH_STARSHIPS_BY_PAGE_NUMBER_REQUEST, pageNumber});