function getCustomersList(obj) {
    
    let arrayOfObjects =  Object.entries(obj)
        .sort((person, nextPerson) => person[1].age - nextPerson[1].age)
        .map(item => item = { ...item[1], id:item[0] });

    return arrayOfObjects;
}