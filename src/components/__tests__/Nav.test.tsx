import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Nav } from '../Nav';
import { testData } from '../__data__/testData';

it('should render the nav when it gets data from the api', () => {
    const wrapper = shallow(<Nav albums={testData} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should not render the nav when it does not get data from the api', () => {
    const emtpyData: any = [];
    const wrapper = shallow(<Nav albums={emtpyData} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});