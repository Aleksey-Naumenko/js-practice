export function increaser(a, index) {
    if (typeof a !== 'number' || index < 0) return null;
    return a >= index ? a + index : a;
}