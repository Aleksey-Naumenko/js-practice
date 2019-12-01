export function reverseArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let reversedArr = [...arr].reverse();
    return reversedArr;
}