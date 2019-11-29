function superRound(num, quantity) {
    let roundedNumbs = [];
    let quantityNum = 1;
    for (let i = 0; i < quantity; i++) {
        quantityNum += '0';
    }
    roundedNumbs.push(Math.floor(num * +quantityNum) / +quantityNum);
    roundedNumbs.push(Math.round(num * +quantityNum) / +quantityNum);
    roundedNumbs.push(Math.ceil(num * +quantityNum) / +quantityNum);
    roundedNumbs.push(Math.trunc(num * +quantityNum) / +quantityNum);
    roundedNumbs.push(+num.toFixed(quantity));
    return roundedNumbs;
}