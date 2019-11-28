function pickProps(obj, props) {
    let filteredObj = {};

    props.map(item => {
        for (let key in obj) {
            if (key == item) {
            filteredObj[item] = item;
            }
        }
    });

    return filteredObj;
}