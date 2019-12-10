import { Order } from './index';

it ('Shuold get "false" - defaut value', () => {
    let deal = new Order(100, 'Kiev', 'Sell');
    let result = deal.isConfirmed;
    expect(result).toEqual(false);
});

it ('Shuold get "true" - we confirmed the order', () => {
    let deal = new Order(100, 'Kiev', 'Sell');
    deal.confirmOrder();
    let result = deal.isConfirmed;
    expect(result).toEqual(true);
});

it ('Shuold get "false" - the sum is less than 1000', () => {
    let deal = new Order(100, 'Kiev', 'Sell');
    let result = deal.checkPrice();
    expect(result).toEqual(false);
});

it ('Shuold get "true" - the sum is bigger than 1000', () => {
    let deal = new Order(1100, 'Kiev', 'Sell');
    let result = deal.checkPrice();
    expect(result).toEqual(true);
});

it ('Shuold get "false" - the type is wrong', () => {
    let deal = new Order(100, 'Kiev', 'Shell');
    let result = deal.isValidType();
    expect(result).toEqual(false);
});

it ('Shuold get "true" - the type is correct', () => {
    let deal = new Order(100, 'Kiev', 'Buy');
    let result = deal.isValidType();
    expect(result).toEqual(true);
});

it ('Shuold get the city of deal', () => {
    let deal = new Order(100, 'Kiev', 'Shell');
    let result = deal.city;
    expect(result).toEqual('Kiev');
});