function getCustomersList(obj) {
    
    for (let key in obj) {
        obj[key].id = 'hello';
    }

    let sortedObj = Object.values(obj);
    console.log(sortedObj);

    let sortedByAge = sortedObj.sort((person, secondPerson) => person.age - secondPerson.age);
    console.log(sortedByAge);
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