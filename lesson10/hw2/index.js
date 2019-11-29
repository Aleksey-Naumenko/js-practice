function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumbers(length, start, end) {
    let arrayOfNumbs = [];
    if (Number.isInteger(end) > Number.isInteger(start)) {
        for (let i = 1; i <= length; i++) {
            arrayOfNumbs.push(getRandomNumber(start, end));
        } 
    } else {
        return null;
    }
    return arrayOfNumbs;
}