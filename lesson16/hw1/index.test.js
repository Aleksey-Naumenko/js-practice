import { createArrayOfFunctions } from './index';

it ('get an empty array', () => {
    let result = createArrayOfFunctions();
    expect(result).toEqual([]);
});

it ('Invalid input - get null', () => {
    let result = createArrayOfFunctions('15');
    expect(result).toEqual(null);
});

it ('get an empty array', () => {
    let result = createArrayOfFunctions(9)[5]();
    expect(result).toEqual(5);
});