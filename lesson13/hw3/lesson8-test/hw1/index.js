export function pickProps(obj, props) {
    if (!Array.isArray(props) || props.length === 0) return null;
    let filteredObj = {};

    props.map(item => {
        for (let key in obj) {
            if (key == item) {
            filteredObj[key] = obj[key];
            }
        }
    });

    return filteredObj;
}