
import { ActionTypes } from '../action-types';

interface FetchAlbumsAction {
    type: ActionTypes.FETCH_ALBUMS,
    payload: string[]
}


export type Action = FetchAlbumsAction;