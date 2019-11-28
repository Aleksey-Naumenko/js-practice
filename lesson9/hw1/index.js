function getCustomersList(obj) {
    let myObj = Object.assign(obj);

    for (let key in myObj) {
        myObj[key].id = key;
    }

    let objToArray = Object.values(myObj);

    let sortedByAge = objToArray.sort((person, secondPerson) => person.age - secondPerson.age);
    
    return sortedByAge;
}