function uniqueCount(array) {
    let counter = 0;
    let q = array.filter((item, index) => index == array.indexOf(item) ? counter++ : false);
    return counter;
}