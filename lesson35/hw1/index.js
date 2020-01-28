export const parseUser = jsonString => {
    try {
        const prsedJSON = JSON.parse(jsonString);
        return prsedJSON;
    } catch(e) {
        return null;
    }
}

parseUser('{"name": "Tom", "age": "20"');