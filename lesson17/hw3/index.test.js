import { bind } from './index';

it ('sould get full-name and adress info', () => {
    function showFullName(street) {
        return `My full name is ${this.name} ${this.lastName}. I live on ${street}`;
    }
    let user = {
        name: 'Bob',
        lastName: 'Marley',
    }
    let firstUser = bind(showFullName, user);
    let result = firstUser('MainRoad, 26');
    expect(result).toEqual('My full name is Bob Marley. I live on MainRoad, 26');
});

it ('get full-name and undefined street (didn"t pass the parameter)', () => {
    function showFullName(street) {
        return `My full name is ${this.name} ${this.lastName}. I live on ${street}`;
    }
    let user = {
        name: 'Bob',
        lastName: 'Marley',
    }
    let firstUser = bind(showFullName, user);
    let result = firstUser(); // no parameter
    expect(result).toEqual('My full name is Bob Marley. I live on undefined');
});

it ('get changed last-name and undefined street (didn"t pass the parameter)', () => {
    function showFullName(street) {
        return `My full name is ${this.name} ${this.lastName}. I live on ${street}`;
    }
    let user2 = {
        name: 'Aleksey',
    }
    let firstUser = bind(showFullName, user2);
    user2.lastName = 'Naumenko';
    let result = firstUser(); // no parameter
    expect(result).toEqual('My full name is Aleksey Naumenko. I live on undefined');
});

