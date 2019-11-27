function squareArray(arr) {
    let squaredArr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * 2);
    }

    return squaredArr;
}