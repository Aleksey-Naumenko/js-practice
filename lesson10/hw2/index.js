function getRandomNumbers(length, min, max) {
    let arrayOfNumbs = [];

    if (max > min) {
        Math.floor(min);
        Math.floor(max);
        
        do {
            arrayOfNumbs.push(Math.floor(Math.random() * (max - min) + min));
        } while (arrayOfNumbs.length < length);
        
    } else {
        return null;
    }

    return arrayOfNumbs;
}