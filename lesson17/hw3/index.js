export function bind(func, context, ...args) {
    return function(...thisArgs) {
        return func.call(context, ...thisArgs, ...args);
    }
}