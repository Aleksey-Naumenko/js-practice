function getFiniteNumbers(arr) {
    let finiteNumbs = [];
    arr.map(item => Number.isFinite(item) ? finiteNumbs.push(item) : false);
    return finiteNumbs;
}

function getFiniteNumbersV2(arr) {
    let finiteNumbs = [];
    arr.map(item => Number.isFinite(item) ? finiteNumbs.push(item) : false);
    return finiteNumbs;
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