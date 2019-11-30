import getMinSquaredNumber from './getMinSquaredNumber';

it ('should get null - empty array', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
});

it ('should get null - input is a string', () => {
    const result = getMinSquaredNumber('string');
    expect(result).toEqual(null);
});

it ('should get min squared number', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});