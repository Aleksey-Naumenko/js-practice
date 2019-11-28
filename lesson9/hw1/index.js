function getCustomersList(obj) {
    let myObj = Object.entries(obj);

    myObj.map(function(item) {
        item[1].id = item[0];
        item.splice(0, 1);
    });

    let sortedByAge = myObj.sort((person, nextPerson) => person.age - nextPerson.age);
    
    return sortedByAge;
}

console.log(getCustomersList( {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Bob',
        age: 30
    },
    'customer-id-4': {
        name: 'David',
        age: 44
    },
}));