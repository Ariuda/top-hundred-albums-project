import { Album } from '../entities';

export const getVisibleAlbums = (arr: Album[], page: number, albumsPerPage: number) : Album[] => {
    const start = page === 0 ? page : page * albumsPerPage;
    const stop = page === 0 ? albumsPerPage : (page + 1) * albumsPerPage;
    return arr.slice(start, stop);
}