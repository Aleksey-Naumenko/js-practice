function getRandomNumbers(length, min, max) {
    let arrayOfNumbs = [];
    
    if (max < min || max - min < 0) return null;
        
    let min = Math.floor(min);
    let max = Math.floor(max);

    do {
        arrayOfNumbs.push(Math.floor(Math.random() * (max - min) + min));
    } while (arrayOfNumbs.length < length);

    return arrayOfNumbs;
}