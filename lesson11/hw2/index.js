function countOccurrences(str, substr) {
    if (substr.length === 0) return null;

    let counter = -1;
    str.split(substr)
        .map(() => counter += 1);

    return counter;
}


console.log(countOccurrences('asd aseasdwqeq asd 13fsdff asd asdfwqe3', ''));