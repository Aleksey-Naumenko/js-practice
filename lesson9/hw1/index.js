function getCustomersList(obj) {
    let myObj = Object.entries(obj);

    myObj.map(function(item) {
        item[1].id = item[0];
        item.splice(0, 1);
    });

    console.log(myObj)

    let sortedByAge = myObj.sort((person, nextPerson) => person[0].age - nextPerson[0].age);
    
    return sortedByAge;
}