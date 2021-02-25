import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import axios from 'axios';
import Root from '../Root';
import App from '../App';
const responseData = require('../__data__/response.json');

jest.mock('axios');
let mockedAxios = axios as jest.Mocked<typeof axios>;

let wrapped: ReactWrapper;

describe('set of tests to test if the albumsList page is rendered as expected', () => {
    const delayTest = () => new Promise((resolve, reject) => setTimeout(resolve, 300));

    beforeEach(() => {
        mockedAxios.get.mockReturnValue({ data: responseData } as unknown as any);
        wrapped = mount(
            <Root>
                <App />
            </Root>
        );

        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });
    
    afterEach(() => {
        wrapped.unmount();
    });
    
    afterAll(() => {
        jest.unmock('axios');
    });
    
    it('can fetch a list of albums and display them', async () => {  
        await delayTest();
        wrapped.update();
        expect(wrapped.find('.card-container').length).toEqual(12);
    });

    it('has a searchbar', async () => {
        await delayTest();
        wrapped.update();
        expect(wrapped.find('.search-input').length).toEqual(1);
    });

    it('has a button with the right link to go to the see more details page on the card component', async () => {
        await delayTest();
        wrapped.update();
        const buttons = wrapped.find('.dark-button');
        expect(buttons.get(0).props.to).toEqual('/album/999999');
    });
    
    it('initially shows only the next button and the page', async () => {
        await delayTest();
        wrapped.update();
        const page = wrapped.find('.page');
        expect(page.text()).toEqual('Page 1');
        expect(wrapped.find({ children: 'Next' }).length).toEqual(1);
        expect(wrapped.find({ children: 'Prev' }).length).toEqual(0);
    });

    it('shows the second page after clicking and there are both buttons', async () => {
        await delayTest();
        wrapped.update();
        wrapped.find({ children: 'Next' }).simulate('click');
        const page = wrapped.find('.page');
        expect(page.text()).toEqual('Page 2');
        expect(wrapped.find({ children: 'Next' }).length).toEqual(1);
        expect(wrapped.find({ children: 'Prev' }).length).toEqual(1);
    });

    it('shows the last page after clicking 2 times and there is only the prev button', async () => {
        await delayTest();
        wrapped.update();
        wrapped.find({ children: 'Next' }).simulate('click');
        const page = wrapped.find('.page');
        expect(page.text()).toEqual('Page 3');
        expect(wrapped.find({ children: 'Next' }).length).toEqual(0);
        expect(wrapped.find({ children: 'Prev' }).length).toEqual(1);
    });

    it('has a footer', async () => {
        await delayTest();
        wrapped.update();
        expect(wrapped.find('.footer').length).toEqual(1);
    });
})
