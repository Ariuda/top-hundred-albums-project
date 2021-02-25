import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoadingComponent } from '../LoadingComponent';

it('should render the loading component', () => {
    const wrapper = shallow(<LoadingComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});