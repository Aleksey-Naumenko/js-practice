function getRandomNumbers(length, min, max) {
    let arrayOfNumbs = [];

    if (Number.isInteger(min, max) && max > min) {
        for (let i = 1; i <= length; i++) {
            arrayOfNumbs.push(Math.floor(Math.random() * (max - min) + min));
        } 
    } else {
        return null;
    }
    return arrayOfNumbs;
}