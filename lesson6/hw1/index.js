function squareArray(arr) {
    let squaredArr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }

    return squaredArr;
}

console.log(squareArray([2, 3, 4, 5]));