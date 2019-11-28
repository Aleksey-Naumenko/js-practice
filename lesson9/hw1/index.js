function getCustomersList(obj) {
    
    for (let key in obj) {
        obj[key].id = 'hello';
    }

    let sortedObj = Object.values(obj);
    console.log(sortedObj);

    let sortedByAge = sortedObj.sort((person, secondPerson) => person.age - secondPerson.age);
    console.log(sortedByAge);
}