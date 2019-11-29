function multiRound(num) {
    let roundedNumbs = [];
    roundedNumbs.push(Math.floor(num * 100) / 100);
    roundedNumbs.push(Math.round(num * 100) / 100);
    roundedNumbs.push(Math.ceil(num * 100) / 100);
    roundedNumbs.push(Math.trunc(num * 100) / 100);
    roundedNumbs.push(+num.toFixed(2));
    return roundedNumbs;
}