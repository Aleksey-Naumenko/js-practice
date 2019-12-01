import { reverseArray } from './index';

it ('Reversed array of numbers', () => {
    let result = reverseArray([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});

it ('Should get null - invalid input', () => {
    let result = reverseArray('1', '2', '3');
    expect(result).toEqual(null);
});

it ('Should get null - an empty array', () => {
    let result = reverseArray([]);
    expect(result).toEqual(null);
});