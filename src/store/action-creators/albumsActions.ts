import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<Action>)  => {
        try {
            const { data } = await axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
            //console.log(data);
            dispatch({
                type: ActionTypes.FETCH_ALBUMS,
                payload: data
            });
            dispatch({
                type: ActionTypes.FETCH_API_AUTHOR_DETAILS,
                payload: data
            });
        } catch(err) {
            throw new Error('Ooops! We could not get any results, please try again later.');
        }
    }
}

export const updateFavorite = (id: string): Action => {
    return {
        type: ActionTypes.UPDATE_FAVORITE,
        payload: id
    }
}