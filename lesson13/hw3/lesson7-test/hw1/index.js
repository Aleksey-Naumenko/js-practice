export function squareArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    return arr.map(num => num * num);
}