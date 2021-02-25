import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Footer } from '../Footer';

const APIAuthorDetails = {
    name: 'name',
    link: 'link',
    rights: 'rights', 
    title: 'title', 
    lastUpdated: 'last-updated' 
}

it('should render the footer when it gets all the data from the api', () => {
    const wrapper = shallow(<Footer APIAuthorDetails={APIAuthorDetails} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should not render the footer if it does not get all the data from the api', () => {
    const emtpyAuthorDetails = {
        name: '',
        link: '',
        rights: '', 
        title: '', 
        lastUpdated: '' 
    }
    const wrapper = shallow(<Footer APIAuthorDetails={emtpyAuthorDetails} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
