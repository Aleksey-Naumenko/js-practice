export const addImage = url => {

    return new Promise((resolve, reject) => {

        const pageElem = document.querySelector('.page');
        const imgElem = document.createElement('img');
        imgElem.src = url;
        imgElem.setAttribute('alt', 'My photo');
        pageElem.append(imgElem);
        
        const onImageLoad = () => {
            const { width, height } = imgElem;
            resolve({ width, height });
        }
        
        imgElem.addEventListener('load', onImageLoad);
        imgElem.addEventListener('error', () => reject('Image load failed'));
    });
}

// const imgUrl = 'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg';

// const q = addImage(imgUrl);

// console.log(q);