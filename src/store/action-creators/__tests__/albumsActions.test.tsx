import axios from 'axios';
import { fetchAlbums, updateFavorite } from '../albumsActions';
import { ActionTypes } from '../../action-types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('testing albums action creators', () => {

    it('should dispatch FETCH_ALBUMS and FETCH_API_AUTHOR_DETAILS', () => {
        const store = mockStore({});

        return store.dispatch(fetchAlbums() as unknown as any)
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(ActionTypes.FETCH_ALBUMS);
                expect(actions[1].type).toEqual(ActionTypes.FETCH_API_AUTHOR_DETAILS);
            });
        
    });

    it('should dispatch UPDATE_FAVORITE', () => {
        const action = updateFavorite('test');
        expect(action.type).toEqual(ActionTypes.UPDATE_FAVORITE);
        expect(action.payload).toEqual('test');
    });
})

