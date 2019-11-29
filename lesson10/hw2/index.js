function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumbers(length, start, end) {
    let arrayOfNumbs = [];

    if (Number.isInteger(start, end) && end > start) {
        for (let i = 1; i <= length; i++) {
            arrayOfNumbs.push(getRandomNumber(start, end));
        } 
    } else {
        return null;
    }
    return arrayOfNumbs;
}

console.log(getRandomNumbers(4, -100, 50));