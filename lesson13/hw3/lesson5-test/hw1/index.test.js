import { getSum } from './index';

it ('should get sum of even numbers in the specified interval', () => {
    let result = getSum(2, 4);
    expect(result).toEqual(6);
});

it ('should get null - invalid input', () => {
    let result = getSum(2, '4');
    expect(result).toEqual(null);
});

it ('should get null - invalid input', () => {
    let result = getSum([2], 4);
    expect(result).toEqual(null);
});