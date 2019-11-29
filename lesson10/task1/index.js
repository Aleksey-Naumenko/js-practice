function getFiniteNumbers(arr) {
    return arr.map(item => Number.isFinite(item));
}

function getFiniteNumbersV2(arr) {
    return arr.map(item => isFinite(item));
}

function getNaN(arr) {
    return arr.map(item => Number.isNaN(item));
}

function getNaNV2(arr) {
    return arr.map(item => isNaN(item));
}

function getIntegers(arr) {
    return arr.map(item => Number.isInteger(item));
}