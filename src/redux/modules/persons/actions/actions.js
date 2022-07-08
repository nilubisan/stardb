import {SET_PAGE, SET_PERSONS, FETCH_PERSONS_BY_PAGE_NUMBER} from './actionTypes';

export const setPage = (page) => ({type: SET_PAGE, page});
export const fetchPersonsByPageNumberSuccess = (result) => ({type: SET_PERSONS, result});
// export const fetchPersonsByPageNumberFail = (result) => ({type: SET_PERSONS, result});
export const fetchPersonsByPageNumberRequest = (pageNumber) => ({type: FETCH_PERSONS_BY_PAGE_NUMBER, pageNumber});