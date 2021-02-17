import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import filtersReducer from './filtersReducer';

export const reducers = combineReducers({
    albumsState: albumsReducer,
    filtersState: filtersReducer
});

export type RootState = ReturnType<typeof reducers>;