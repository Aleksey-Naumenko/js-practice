function getPeople(obj) {
    return Object
        .values(obj)
        .reduce((acc, elem) => {
            return acc.concat(elem);
        }, [])
        .map(room => room.name);
}