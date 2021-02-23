import { Action } from '../actions';
import { ActionTypes } from '../action-types';
import { Album, APIAuthor } from '../../entities';
import { Reducer } from 'redux';

export type AlbumsState = {
    albums: Album[];
    APIAuthor: APIAuthor;
};

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

const reducer: Reducer<AlbumsState, Action> = (state: AlbumsState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.FETCH_ALBUMS: 
            console.log(action.payload);
            const results = action.payload.feed.entry.map((entry: any, i: number): Album => {
                return {
                    id: entry.id.attributes['im:id'],
                    link: entry.id.label,
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
                    numberOfItems: entry['im:itemCount'].label,
                    releaseDate: entry['im:releaseDate'].attributes.label,
                    rights: entry.rights.label,
                    index: i + 1,
                    favorite: false
                }
            });
            return { ...state, albums: results };
            case ActionTypes.FETCH_API_AUTHOR_DETAILS:
                const { feed } = action.payload;
                const result = {
                    name: feed.author.name.label,
                    link: feed.author.uri.label,
                    rights: feed.rights.label,
                    title: feed.title.label,
                    lastUpdated: feed.updated.label
                };
            return { ...state, APIAuthor: result };
            case ActionTypes.UPDATE_FAVORITE:
                const updatedAlbums = state.albums.map(album => {
                    if (album.id === action.payload) {
                        const favorite = !album.favorite;
                        return { ...album, favorite};
                    }
                    return {...album};
                });
                return { ...state, albums: updatedAlbums };
        default:
            return state;
    }
}

export default reducer;