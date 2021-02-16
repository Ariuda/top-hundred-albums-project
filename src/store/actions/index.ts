
import { ActionTypes } from '../action-types';

interface FetchAlbumsAction {
    type: ActionTypes.FETCH_ALBUMS,
    payload: any
}


export type Action = FetchAlbumsAction;