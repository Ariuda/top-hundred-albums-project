import filtersReducer from '../filtersReducer';
import { ActionTypes } from '../../action-types';

const initialState = {
    page: 0,
    maxResultsPerPage: 12
}

it('handles actions of type UPDATE_PAGE', () => {
    const action = {
        type: ActionTypes.UPDATE_PAGE,
        payload: 1
    };

    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual({ page: 1, maxResultsPerPage: 12 });
});

it('handles action with unknown type', () => {
    const action = {
        type: ActionTypes.FETCH_ALBUMS,
        payload: 1
    };
    const newState = filtersReducer(initialState, action);
    expect(newState).toEqual(initialState);
});
