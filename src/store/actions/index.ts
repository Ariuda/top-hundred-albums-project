
import { ActionTypes } from '../action-types';

interface FetchAlbumsAction {
    type: ActionTypes.FETCH_ALBUMS,
    payload: any
}

interface FetchAPIAuthorDetails {
    type: ActionTypes.FETCH_API_AUTHOR_DETAILS,
    payload: any
}

interface UpdatePageAction {
    type: ActionTypes.UPDATE_PAGE,
    payload: number;
}

interface UpdateFiltersAction {
    type: ActionTypes.FILTER_ALBUMS,
    payload: string;
}


export type Action = FetchAlbumsAction | UpdatePageAction | UpdateFiltersAction;