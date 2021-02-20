import { limitCharacters } from '../helpers';

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