import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it ('here should be squared numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it ('get odd numbers only', () => {
    const result = getOddNumbers([1, 3, 4, 5, 6]);
    expect(result).toEqual([1, 3, 5]);
});

it ('should return sum of numbers', () => {
    const result = getSum(4, 5);
    expect(result).toEqual(9);
});