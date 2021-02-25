import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { PaginationComponent } from '../PaginationComponent';
import { testData } from '../__data__/testData';

const props = {
    filters: {
        page: 0,
        maxResultsPerPage: 12,
        filter: ''
    }, 
    updateCurrentPage: () => console.log('test')
}

it('should render the pagination component correctly', () => {
    const wrapper = shallow(
        <PaginationComponent 
            filters={props.filters} 
            updateCurrentPage={props.updateCurrentPage} 
            albums={testData} 
        />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
});