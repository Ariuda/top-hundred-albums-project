import albumsReducer from '../albumsReducer';
import { ActionTypes } from '../../action-types';
import { Action } from '../../actions';

const responseData = require('../../../__data__/response.json');

const initialState = {
    albums: [],
    APIAuthor: {
        name: '',
        link: '',
        rights: '', 
        title: '', 
        lastUpdated: '' 
    }
};

it('should handle an action with type FETCH_ALBUMS', () => {
    const action: Action = {
        type: ActionTypes.FETCH_ALBUMS,
        payload: responseData
    }

    const newState = albumsReducer(initialState, action);
    expect(newState.albums).toHaveLength(28);
});

it('should handle an action with type FETCH_API_AUTHOR_DETAILS', () => {
    const action: Action = {
        type: ActionTypes.FETCH_API_AUTHOR_DETAILS,
        payload: responseData
    };
    const newState = albumsReducer(initialState, action);
    expect(newState.APIAuthor).toEqual({
        name: 'author-name',
        link: 'author-link',
        rights: 'rights-label', 
        title: 'title-label', 
        lastUpdated: 'last-updated-label' 
    })
});

it('should handle an action with type UPDATE_FAVORITE', () => {
    const firstAction: Action = {
        type: ActionTypes.FETCH_ALBUMS,
        payload: responseData
    }
    const updatedState = albumsReducer(initialState, firstAction);

    const action: Action = {
        type: ActionTypes.UPDATE_FAVORITE,
        payload: '999999'
    };
    
    const newState = albumsReducer(updatedState, action);
    expect(newState.albums[0].favorite).toBeTruthy();
});

it('handles action with unknown type', () => {
    const action: Action = {
        type: ActionTypes.UPDATE_PAGE,
        payload: 1
    };
    const newState = albumsReducer(initialState, action);
    expect(newState).toEqual(initialState);
});