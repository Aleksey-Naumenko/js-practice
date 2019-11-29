function getParsedIntegers(arr) {
    let parsedInt = [];
    arr.map(item => Number.parseInt(item) ? parsedInt.push(item) : false);
    return parsedInt;
}

function getParsedIntegersV2(arr) {
    let parsedInt = [];
    arr.map(item => parseInt(item) ? parsedInt.push(item) : false);
    return parsedInt;
}

function getParsedFloats(arr) {
    let floatedNumbs = [];
    arr.map(item => Number.parseFloat(item) ? floatedNumbs.push(item) : false);
    return floatedNumbs;
}

function getParsedFloatsV2(arr) {
    let floatedNumbs = [];
    arr.map(item => parseFloat(item) ? floatedNumbs.push(item) : false);
    return floatedNumbs;
}