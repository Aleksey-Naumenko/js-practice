function getMaxAbsoluteNumber(arr) {
    let absArr = arr.map(item => Math.abs(item));
    let theBiggestNum = Math.max(...absArr);
    return theBiggestNum;
}