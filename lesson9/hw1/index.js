function getCustomersList(obj) {
    
    let arrayOfArrays =  Object.entries(obj);

    arrayOfArrays.map(function(item) {
            item[1].id = item[0];
            item.splice(0, 1);
        });

    let arrayOfObjects = arrayOfArrays
        .reduce((acc, elem) => {
            return acc.concat(elem);
            }, [])
        .sort((person, nextPerson) => person.age - nextPerson.age);

    return arrayOfObjects;
}