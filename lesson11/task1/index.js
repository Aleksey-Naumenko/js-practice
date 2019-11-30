function splitText(string, len = 10) {
    if (typeof(string) !== 'string') return null;
    let arr = [];
    let start =  0;

    while (true) {
        let line = string.substr(start, len);
        if (line.length === 0) break;
        arr.push(line[0].toUpperCase() + line.slice(1));
        start += len;
    }
    return arr.join('\n');
}