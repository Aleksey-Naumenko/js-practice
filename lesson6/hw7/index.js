function checker(arr) {
    let orderedArr =  arr.sort((a, b) => a - b);
    return (orderedArr[0] + orderedArr[orderedArr.length - 1]) > 1000 ? true : false;
}
