import { SET_ERROR, SET_IS_LOADING } from './actionTypes'

export const setIsLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading });
export const setError = (error) => ({ type: SET_ERROR, error });