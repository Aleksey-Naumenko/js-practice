function concatProps(obj) {
    let arrFromObj = [];

    for (let key in obj) {
        arrFromObj.push(obj[key]);
    }

    return arrFromObj;
}

console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));