import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';

const reducers = combineReducers({
    albums: albumsReducer
});

export default reducers;