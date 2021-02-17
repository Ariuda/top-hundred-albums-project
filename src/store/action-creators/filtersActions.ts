import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const updateCurrentPage = (goTo: number): Action => {
    return { 
        type: ActionTypes.UPDATE_PAGE,
        payload: goTo 
    } ;
};