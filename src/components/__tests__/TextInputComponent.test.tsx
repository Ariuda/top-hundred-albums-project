import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { TextInputComponent } from '../TextInputComponent';

const props = {
    value: '',
    placeholder: 'test',
    onChange: () => console.log('test function')
}

it('should render the text input component correctly', () => {
    const wrapper = shallow(<TextInputComponent value={props.value} placeholder={props.placeholder} onChange={props.onChange} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});