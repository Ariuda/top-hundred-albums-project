import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { SearchResultsComponent } from '../SearchResultsComponent';
import { testData } from '../__data__/testData';

const props = {
    onClick: () => console.log('test')
}

it('should render the search results if there are any results', () => {
    const wrapper = shallow(
        <SearchResultsComponent 
            results={testData}
            onClick={props.onClick}
        />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should not render the search results if there are no results', () => {
    const wrapper = shallow(
        <SearchResultsComponent 
            results={[]}
            onClick={props.onClick}
        />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
});