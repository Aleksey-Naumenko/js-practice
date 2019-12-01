import { calc } from './index';

it ('should get sum of numbers', () => {
    const result = calc('2 + 2');
    expect(result).toEqual('2 + 2 = 4');
});

it ('should substract numbers', () => {
    const result = calc('4 - 2');
    expect(result).toEqual('4 - 2 = 2');
});

it ('should multiply the numbers', () => {
    const result = calc('2 * 2');
    expect(result).toEqual('2 * 2 = 4');
});

it ('should divide the numbers', () => {
    const result = calc('2 / 2');
    expect(result).toEqual('2 / 2 = 1');
});

it ('should get null - invalid input', () => {
    const result = calc(2 + 2);
    expect(result).toEqual(null);
});