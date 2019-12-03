export function createArrayOfFunctions(len) {
    if (typeof len !== 'number') {
        return null;
    }

    let arr = [];

    for (let i = 0; i < len; i++) {
        arr[i] = function() {
            return i;
        }
    }

    return arr;
}