import { squareArray } from './index';

it ('Get array of squared numbers', () => {
    let result = squareArray([2, 4, 6]);
    expect(result).toEqual([4, 16, 36]);
});

it ('Should get null - string is invalid input', () => {
    let result = squareArray('2', '4', '6');
    expect(result).toEqual(null);
});

it ('Should get null - an empty array', () => {
    let result = squareArray([]);
    expect(result).toEqual(null);
});