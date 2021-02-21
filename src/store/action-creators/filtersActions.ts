import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const updateCurrentPage = (goTo: number): Action => {
    return { 
        type: ActionTypes.UPDATE_PAGE,
        payload: goTo 
    } ;
};

export const updateFilters = (term: string): Action => {
    return {
        type: ActionTypes.FILTER_ALBUMS,
        payload: term
    }
}