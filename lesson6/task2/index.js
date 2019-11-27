function getSum(array) {
    let sum = 0;

    if (!Array.isArray(array)) {
        return null;
    }
    
    for (let i = 0; i < array.length; i++) {
        sum += i;
    }
    return sum;
}