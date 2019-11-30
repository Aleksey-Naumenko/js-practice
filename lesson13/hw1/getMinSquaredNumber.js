export default function getMinSquaredNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    let res = arr.map(item => Math.abs(item * item));
        // .sort((a, b) => a - b);

    return Math.min(...res);
}

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));