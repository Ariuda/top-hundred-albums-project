import filtersReducer from '../filtersReducer';
import { ActionTypes } from '../../action-types';
import { Action } from '../../actions';

const initialState = {
    page: 0,
    maxResultsPerPage: 12,
    filter: ''
}

it('handles actions of type UPDATE_PAGE', () => {
    const action: Action = {
        type: ActionTypes.UPDATE_PAGE,
        payload: 1
    };

    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({ page: 1, maxResultsPerPage: 12, filter: '' });
});

it('handles action with type FILTER_ALBUMS', () => {
    const action: Action = {
        type: ActionTypes.FILTER_ALBUMS,
        payload: 'test'
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({ page: 0, maxResultsPerPage: 12, filter: 'test' });
});

it('handles action with unknown type', () => {
    const action: Action = {
        type: ActionTypes.FETCH_ALBUMS,
        payload: 1
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual(initialState);
});
