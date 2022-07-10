import {CHANGE_CURRENT_PAGE_NUMBER, LOAD_PERSONS_REQUEST, LOAD_PERSONS_SUCCESS, LOAD_PERSONS_FAILURE, FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST} from './actionTypes';

export const changeCurrentPageNumber = (pageNumber) => ({type: CHANGE_CURRENT_PAGE_NUMBER, pageNumber});
export const loadPersonsRequest = () => ({type: LOAD_PERSONS_REQUEST});
export const loadPersonsSuccess = (result) => ({type: LOAD_PERSONS_SUCCESS, result});
export const loadPersonsFailure = (error) => ({type: LOAD_PERSONS_FAILURE, error});
export const fetchPersonsByPageNumberRequest = (pageNumber) => ({type: FETCH_PERSONS_BY_PAGE_NUMBER_REQUEST, pageNumber});