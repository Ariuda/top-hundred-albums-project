import { filterBySearch } from '../searchFilters';
import { testData } from '../__data__/testData';

it('should match album artist, title of category given a string', () => {
    const search = filterBySearch('different', testData);
    expect(search.length).toEqual(1);
});

it('should match album artist, title of category given a string', () => {
    const search = filterBySearch('title', testData);
    expect(search.length).toEqual(14);
});

it('should return an empty array if it does not find any results', () => {
    const search = filterBySearch('longer string', testData);
    expect(search.length).toEqual(0);
});