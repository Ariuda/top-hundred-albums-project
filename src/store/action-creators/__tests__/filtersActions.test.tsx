import { updateCurrentPage, updateFilters } from '../filtersActions';
import { ActionTypes } from '../../action-types';

describe('set of tests to check if filters actions work as expected', () => {
    

    it('should test that UPDATE_PAGE has the correct type and payload', () => {
        const action = updateCurrentPage(1);
        expect(action.type).toEqual(ActionTypes.UPDATE_PAGE);
        expect(action.payload).toEqual(1);
    });

    it('should test that FILTER_ALBUMS has the correct type and payload', () => {
        const action = updateFilters('test');
        expect(action.type).toEqual(ActionTypes.FILTER_ALBUMS);
        expect(action.payload).toEqual('test');
    });
});