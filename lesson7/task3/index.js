function flatArray(arr) {
    return arr.reduce((first, second) => first.concat(second) , []);
}