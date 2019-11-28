function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let reversedArr = [...arr].reverse();
    return reversedArr;
}