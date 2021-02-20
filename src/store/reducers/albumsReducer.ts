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
            console.log(action.payload);
            const results = action.payload.feed.entry.map((entry: any, i: number): Album => {
                return {
                    id: entry.id.attributes['im:id'],
                    title: entry['im:name'].label,
                    artist: {
                        name: entry['im:artist'].label,
                        link: entry['im:artist']?.attributes?.href,
                    },
                    image: entry['im:image'][entry['im:image'].length - 1].label,
                    price: entry['im:price'].label,
                    category: {
                        name: entry.category.attributes.label,
                        link: entry.category.attributes.scheme
                    },
                    index: i + 1
                }
            });
            return { ...state, albums: results };
        default:
            return state;
    }
}

export default reducer;