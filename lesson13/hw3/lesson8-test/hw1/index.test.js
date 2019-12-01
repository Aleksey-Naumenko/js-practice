import { pickProps } from './index';

it ('Find elements in object from array', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
});

it ('Should get null - invalid input of props', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, 'a', 'c');
    expect(result).toEqual(null);
});

it ('Should get null - an empty array', () => {
    let result = pickProps({ a: 1, b: 2, c: 3 }, []);
    expect(result).toEqual(null);
});