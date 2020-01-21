import { addImage } from './addImage.js';

const url = 'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg';

export const addImageV2 = url => {
    return new Promise((resolve, reject) => {
        const callBack = (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }
        addImage(url, callBack);
    });
}

addImageV2(url).then(data => console.log(data)).catch(error => console.log(error));
