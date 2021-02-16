import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';

export const reducers = combineReducers({
    albumsState: albumsReducer
});

export type RootState = ReturnType<typeof reducers>;