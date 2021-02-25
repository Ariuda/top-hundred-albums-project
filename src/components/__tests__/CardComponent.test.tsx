import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CardComponent } from '../CardComponent';

const props = {
    image: 'test-image', 
    title: 'test-title', 
    artist: {
        name: 'test-artist',
        link: 'test-artist-link'
    }, 
    category: {
        name: 'test-category',
        link: 'test-category-link'
    }, 
    index: 0, 
    id: '99999', 
    link: 'test-link', 
    favorite: false, 
    updateFavorite: () => console.log('test'),
    price: 'test-price', 
    numberOfItems: '5', 
    releaseDate: 'test-date', 
    rights: 'test-rights'
}

it('should render the button as a link when a link is passed', () => {
    const wrapper = shallow(<CardComponent {...props} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});