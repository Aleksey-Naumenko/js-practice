function getMaxAbsoluteNumber(arr) {
    if (!Array.isArray(arr) && arr.length == 0) {
        return null;
    }
    let absArr = arr.map(item => Math.abs(item));
    let theBiggestNum = Math.max(...absArr);
    return theBiggestNum;
}