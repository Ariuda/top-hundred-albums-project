import { Action } from '../actions';
import { ActionTypes } from '../action-types';

interface AlbumsState {
    albums: string[];
}

const initialState = {
    albums: []
}

const reducer = (state: AlbumsState = initialState, action: Action) => {
    switch(action.type) {
        case ActionTypes.FETCH_ALBUMS: 
            return { albums: action.payload };
        default:
            return state;
    }
}

export default reducer;