import { Action } from '../actions';
import { ActionTypes } from '../action-types';
import { Reducer } from 'redux';

export type FiltersState = {
    page: number;
    maxResultsPerPage: number;
    filter: string;
}

const initialState = {
    page: 0,
    maxResultsPerPage: 12,
    filter: ''
}

const reducer: Reducer<FiltersState, Action> = (state: FiltersState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_PAGE:
            let nextPage = state.page + action.payload;
            return { ...state, page: nextPage };
        case ActionTypes.FILTER_ALBUMS:
            console.log(action.payload);
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export default reducer;