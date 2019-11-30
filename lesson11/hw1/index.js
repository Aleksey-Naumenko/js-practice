function splitString(string, charNum = 10) {
    if (typeof(string) !== 'string') return null;

    let arrStr = [];
    let start = 0;

    while (true) {
        let sbstr = string.substr(start, charNum);
        if (sbstr.length === 0) break;
        arrStr.push(sbstr);
        start += charNum;
    }
            
    while (arrStr[arrStr.length - 1].length < charNum) {
            arrStr[arrStr.length - 1] += '.';
    }

    return arrStr;
}


console.log(splitString('fsdfs sadad 214 dadsad', 10));