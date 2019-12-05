import { wallet } from './index';

it ('get the max number from array', () => {
    wallet.transactions = [1, 2, 12, 3, 4, 44, 5 ,7];
    let result = wallet.getMax();
    expect(result).toEqual(44);
});

it ('get the min number from array', () => {
    wallet.transactions = [1, 2, 12, 3, 4, 44, 5 ,7];
    let result = wallet.getMin();
    expect(result).toEqual(1);
});