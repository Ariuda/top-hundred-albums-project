
import { ActionTypes } from '../action-types';

interface FetchAlbumsAction {
    type: ActionTypes.FETCH_ALBUMS,
    payload: any
}

interface UpdatePageAction {
    type: ActionTypes.UPDATE_PAGE,
    payload: number;
}


export type Action = FetchAlbumsAction | UpdatePageAction;