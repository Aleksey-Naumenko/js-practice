import { user } from './index';

it ('sould get default full name', () => {
    let result = user.getFullName();
    expect(result).toEqual('John Doe');
});

it ('sould set new first-name', () => {
    user.setFullName('Alex Bale');
    let result = user.firstName;
    expect(result).toEqual('Alex');
});

it ('sould set new last-name', () => {
    user.setFullName('Alex Bale');
    let result = user.lastName;
    expect(result).toEqual('Bale');
});

it ('sould get new full-name', () => {
    let result = user.getFullName('Alex Bale');
    expect(result).toEqual('Alex Bale');
});