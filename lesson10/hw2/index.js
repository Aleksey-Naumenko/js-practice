function getRandomNumbers(length, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let arrayOfNumbs = [];
    
    if (max < min || max - min < 0) return null;
    
    do {
        arrayOfNumbs.push(Math.floor(Math.random() * (max - min) + min));
    } while (arrayOfNumbs.length < length);

    return arrayOfNumbs;
}