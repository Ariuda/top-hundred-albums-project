import { Album } from '../entities';

export const filterBySearch = (term: string, arr: Album[]) => {
    if (term != '') {
        const formatTerm = term.toLowerCase();
        const filter = arr.filter(item => {
            return item.artist.name.toLowerCase().indexOf(formatTerm) > - 1 
                || item.title.toLowerCase().indexOf(formatTerm) > - 1 
                || item.category.name.toLowerCase().indexOf(formatTerm) > - 1;
        })
        return filter;
    }
    return [];
};