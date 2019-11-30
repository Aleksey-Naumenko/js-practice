export default function getMinSquaredNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let res = arr.map(item => Math.abs(item * item));

    return Math.min(...res);
}