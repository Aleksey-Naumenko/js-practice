function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let reversedArr = [...arr].reverse();
    return reversedArr;
}


console.log(reverseArray([1,2,3,4,5,6,7,8,9,87,65,43,2]));