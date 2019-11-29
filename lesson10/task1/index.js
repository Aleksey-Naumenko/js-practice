function getFiniteNumbers(arr) {
    let finiteNumbs = [];
    arr.map(item => finiteNumbs.push( Number.isFinite(item)) );
    return finiteNumbs;
}

function getFiniteNumbersV2(arr) {
    let finiteNumbs = [];
    arr.map(item => finiteNumbs.push( isFinite(item)) );
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