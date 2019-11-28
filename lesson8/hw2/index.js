function getAdults(obj) {
    let above18 = {};

    for (let key in obj) {
        if (obj[key] >= 18) {
            above18[key] = obj[key]; 
        }
    }
    return above18;
}