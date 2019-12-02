import { makeCounter } from './index';

it ('get counter started from 0', () => {
    let counter = makeCounter();
    let result = counter();
    expect(result).toEqual(0);
})

it ('Second step - get counter 1', () => {
    let counter = makeCounter();
    counter();
    let result = counter();
    expect(result).toEqual(1);
})