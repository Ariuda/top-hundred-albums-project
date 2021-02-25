import { limitCharacters, scrollTo } from '../helpers';

it('should not format a string if it does not meet the limit', () => {
    const string = 'This is a test';
    const returnValue = limitCharacters(string);
    expect(returnValue).toBe(string);
});

it('should format a string if it does meet the limit', () => {
    const string = 'This is a longer string and it should be formatted';
    const returnValue = limitCharacters(string);
    expect(returnValue).toBe('This is a longer string and it ...');
});

it('should scroll to top when the function is called', () => {
    global.scrollTo = jest.fn();
    global.pageXOffset = 100;
    global.pageYOffset = 100;
    const t = {
        getBoundingClientRect:() =>  {
            return {
                left: 50,
                top: 50
            }
        }
    }
    scrollTo(t as unknown as any);
    expect(global.scrollTo).toBeCalledWith({ behavior: 'smooth', left: 150, top: 150 });

});