function getRandomNumbers(length, min, max) {
    let arrayOfNumbs = [];

    if (Number.isInteger(min, max) && max > min) {
        
        do {
            arrayOfNumbs.push(Math.floor(Math.random() * (max - min) + min));
        } while (arrayOfNumbs.length < length);
        
    } else {
        return null;
    }

    return arrayOfNumbs;
}