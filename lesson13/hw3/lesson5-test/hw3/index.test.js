import { increaser } from './index';

it ('increase number', () => {
    let result = increaser(5, 5);
    expect(result).toEqual(10);
});

it ('should get null - invalid input', () => {
    let result = increaser('10', 5);
    expect(result).toEqual(null);
});

it ('should get null - invalid input', () => {
    let result = increaser(5, -10);
    expect(result).toEqual(null);
});