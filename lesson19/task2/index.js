export function getOwnProps(obj) {
    let arrOfProps = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== 'function' && obj.hasOwnProperty(prop)) {
            arrOfProps.push(prop);
        }
    }
    return arrOfProps;
}