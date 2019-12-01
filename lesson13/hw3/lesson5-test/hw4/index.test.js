import { compareSums, sum } from './index';

it ('compare the sum of first two numbers with two last', () => {
    let result = compareSums(5, 5, 10, 10);
    expect(result).toEqual(false);
});

it ('should get - They are equal', () => {
    let result = compareSums(6, 4, 7, 3);
    expect(result).toEqual('They are equal');
});

it ('should get null - invalid input', () => {
    let result = compareSums(5, 5, 15, 15);
    expect(result).toEqual('Bigger twice');
});