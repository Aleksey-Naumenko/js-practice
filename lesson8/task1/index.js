function transformToObject(arr) {
    let newObj = {};

    arr.forEach(value => {
        newObj[value] = value;
    });
    return newObj;
}