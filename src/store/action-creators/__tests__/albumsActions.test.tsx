import axios from 'axios';
import { fetchAlbums } from '../albumsActions';
import { ActionTypes } from '../../action-types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('testing fetch albums action creator', () => {

    it('action should have the right type', () => {
        const store = mockStore({});

        return store.dispatch(fetchAlbums() as unknown as any)
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(ActionTypes.FETCH_ALBUMS);
            });
        
    });
})

