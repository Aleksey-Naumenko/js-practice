export function createArrayOfFunctions(len = 0) {
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