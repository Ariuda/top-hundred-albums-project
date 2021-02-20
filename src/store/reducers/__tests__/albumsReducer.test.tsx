import albumsReducer from '../albumsReducer';
import { ActionTypes } from '../../action-types';

const responseData = require('../../../__data__/response.json');

const initialState = {
    albums: []
};

it('should handle an action with type FETCH_ALBUMS', () => {
    const action = {
        type: ActionTypes.FETCH_ALBUMS,
        payload: responseData
    }

    const newState = albumsReducer(responseData, action);
    expect(newState.albums).toHaveLength(28);
});

it('handles action with unknown type', () => {
    const action = {
        type: ActionTypes.UPDATE_PAGE,
        payload: 1
    };
    const newState = albumsReducer(initialState, action);
    expect(newState).toEqual(initialState);
});