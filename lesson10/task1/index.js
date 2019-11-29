function getFiniteNumbers(arr) {
    let finiteNumbs = [];
    arr.map(item => Number.isFinite(item) ? finiteNumbs.push(item) : false);
    return finiteNumbs;
}

function getFiniteNumbersV2(arr) {
    let finiteNumbs = [];
    arr.map(item => isFinite(item) ? finiteNumbs.push(item) : false);
    return finiteNumbs;
}

function getNaN(arr) {
    let nanNumbs = [];
    arr.map(item => Number.isNaN(item) ? nanNumbs.push(item) : false);
    return nanNumbs;
}

function getNaNV2(arr) {
    let nanNumbs = [];
    arr.map(item => isNaN(item) ? nanNumbs.push(item) : false);
    return nanNumbs;
}

function getIntegers(arr) {
    let intNUmbs = [];
    arr.map(item => Number.isInteger(item) ? intNUmbs.push(item) : false);
    return intNUmbs;
}