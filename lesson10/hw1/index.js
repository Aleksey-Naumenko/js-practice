function getTotalPrice(arr) {
    let sum = arr.reduce((acc, elem) => acc + elem, 0);
    let rounded = Math.floor(sum * 100) / 100;
    return '$' + rounded;
}