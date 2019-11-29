function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumbers(length, min, max) {
    let arrayOfNumbs = [];

    if (Number.isInteger(min, max) && max > min) {
        for (let i = 1; i <= length; i++) {
            arrayOfNumbs.push(getRandomNumber(min, max));
        } 
    } else {
        return null;
    }
    return arrayOfNumbs;
}