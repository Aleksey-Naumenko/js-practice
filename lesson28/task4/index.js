export const compose = (...funcs) => values => {
    return funcs.reduce((acc, func) => func(acc), value);
}