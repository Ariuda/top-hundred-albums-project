import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { NotFound } from '../NotFound';

const Props = {
    history: {} as any,
    location: {} as any,
    match: {} as any
};

it('should render the not found component correctly', () => {
    const wrapper = shallow(<NotFound {...Props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});