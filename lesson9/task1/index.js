function getAdults(obj) {
    let res = Object.entries(obj)
        .filter(person => person[1] >= 18)
        .map(name => name[0]);
    return res;
}
