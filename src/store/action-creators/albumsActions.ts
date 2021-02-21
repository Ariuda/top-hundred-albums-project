import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<Action>)  => {
        try {
            const { data } = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
            dispatch({
                type: ActionTypes.FETCH_ALBUMS,
                payload: data
            });
        } catch(err) {
            console.error(err.message);
        }
    }
}