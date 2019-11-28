function getPeople(obj) {
    let q = Object.values(obj)
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, [])
        .map(room => room.name);

    return q;
}