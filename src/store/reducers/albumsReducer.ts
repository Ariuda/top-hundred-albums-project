import { Action } from '../actions';
import { ActionTypes } from '../action-types';
import { Album } from '../../entities';
import { Reducer } from 'redux';

export type AlbumsState = {
    albums: Album[];
};

const initialState = {
    albums: []
};

const reducer: Reducer<AlbumsState, Action> = (state: AlbumsState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.FETCH_ALBUMS: 
            const results = action.payload.feed.entry.map((entry: any) => {
                return {
                    id: entry.id.attributes['im:id'],
                    title: entry['im:name'].label,
                    artist: {
                        name: entry['im:artist'].label,
                        url: entry['im:artist'].attributes
                    },
                    image: entry['im:image'][entry['im:image'].length - 1].label
                }
            });
            return { ...state, albums: results };
        default:
            return state;
    }
}

export default reducer;