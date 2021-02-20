import { getVisibleAlbums } from '../paginationFilters';
import { testData } from '../__data__/testData';

it('should should return the correct page given the right parameters', () => {
    const response = getVisibleAlbums(testData, 0, 12);
    expect(response).toHaveLength(12);
});