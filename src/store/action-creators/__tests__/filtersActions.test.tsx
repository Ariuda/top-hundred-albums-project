import { updateCurrentPage } from '../filtersActions';
import { ActionTypes } from '../../action-types';

describe('updates the page', () => {
    const action = updateCurrentPage(1);

    it('has the correct type', () => {
        expect(action.type).toEqual(ActionTypes.UPDATE_PAGE);
    });

    it('has the correct payload', () => {
        expect(action.payload).toEqual(1);
    });
});