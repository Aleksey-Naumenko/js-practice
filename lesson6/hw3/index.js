function sortAsc(array) {
    let sortedArr = array.sort((a, b) => a - b);
    return sortedArr;
}

function sortDesc(array) {
    let sortedArr = array.sort((a, b) => b - a);
    return sortedArr;
}


console.log(sortDesc([2, 5, 3, 8, 1, 4, 17, 11, 10]));