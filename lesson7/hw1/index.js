function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.map(num => num * num);
}