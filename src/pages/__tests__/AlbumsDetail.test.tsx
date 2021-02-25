import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AlbumsDetail } from '../AlbumsDetail';
import { testData } from '../__data__/testData';

const props = {
    selectedAlbum: testData,
    history: {} as any,
    location: {} as any,
    match: {} as any,
};

it('should render the albums detail page correctly', () => {
    const wrapper = shallow(<AlbumsDetail {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});