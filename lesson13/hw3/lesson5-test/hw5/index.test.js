import { findDivCount } from './index';

it ('Range of numbers are divided by "n"', () => {
    let result = findDivCount(2, 4, 2);
    expect(result).toEqual(2);
});

it ('Should get null - invalid input', () => {
    let result = findDivCount(2, 4, '2');
    expect(result).toEqual(null);
});

it ('Should get null - there is no such numbers', () => {
    let result = findDivCount(2, 2, 4);
    expect(result).toEqual(null);
});