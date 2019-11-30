function countOccurrences(str, substr) {
    if (substr.length === 0) return null;

    let counter = -1;
    let res = str.split(substr);
    for (let i = 0; i < res.length; i++) {
        counter += 1;
    }
    return counter;
}


// console.log(countOccurrences('asd aseasdwqeq asd 13fsdff asd asdfwqe3', ''));