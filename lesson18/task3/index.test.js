import { sumOfSquares } from './index';

it ('get the sum of squared numbers', () => {
    let result = sumOfSquares(1, 2, 3, 4, 5, 6);
    expect(result).toEqual(91);
});

it ('get squared number, only one number passed', () => {
    let result = sumOfSquares(5);
    expect(result).toEqual(25);
});

it ('get 0, no numbers passed as an argument', () => {
    let result = sumOfSquares(0);
    expect(result).toEqual(0);
});