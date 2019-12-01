import { getAdults } from './index';

it ('Sorted object by age >= 18', () => {
    let result = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(result).toEqual({ 'John Doe': 19, 'Bob': 18 });
});

it ('Should get null - invalid input', () => {
    let result = getAdults('1', '2', '3');
    expect(result).toEqual(null);
});

it ('Should get an empty object -an empty input', () => {
    let result = getAdults({ 'John Doe': 16, 'Tom': 14, 'Bob': 11 });
    expect(result).toEqual({});
});