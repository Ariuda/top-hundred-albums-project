import { Album } from '../entities';

export const getVisibleAlbums = (arr: Album[], page: number, max: number) : Album[] => {
    const start = page === 0 ? page : page * max;
    const stop = page === 0 ? max : (page + 1) * max;
    return arr.slice(start, stop);
}