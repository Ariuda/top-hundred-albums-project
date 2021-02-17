import { Action } from '../actions';
import { ActionTypes } from '../action-types';
import { Reducer } from 'redux';

export type FiltersState = {
    page: number;
    maxResultsPerPage: number;
}

const initialState = {
    page: 0,
    maxResultsPerPage: 12
}

const reducer: Reducer<FiltersState, Action> = (state: FiltersState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_PAGE:
            let nextPage = state.page + action.payload;
            return { ...state, page: nextPage };
            
        default:
            return state;
    }
};

export default reducer;