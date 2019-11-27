function removeDuplicates(array) {
    let clearArray = [];

    for (let item of array) {
        if (!clearArray.includes(item)) {
            clearArray.push(item);
        }
    }
    
    return clearArray;
}