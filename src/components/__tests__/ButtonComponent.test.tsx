import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ButtonComponent } from '../ButtonComponent';

const props = {
    text: 'test',
    onClick: () => console.log('test'),
    link: 'test-link',
    className: 'test-class'
}

it('should render the button as a link when a link is passed', () => {
    const wrapper = shallow(<ButtonComponent text={props.text} link={props.link} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render the button as a link with an additional class when a link and a classname are passed', () => {
    const wrapper = shallow(<ButtonComponent text={props.text} link={props.link} className={props.className} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render the button as a button when no link is passed', () => {
    const wrapper = shallow(<ButtonComponent text={props.text} onClick={props.onClick} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

it('should render the button as a button with an additional class when there is no link and a classname are passed', () => {
    const wrapper = shallow(<ButtonComponent text={props.text} onClick={props.onClick} className={props.className} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});