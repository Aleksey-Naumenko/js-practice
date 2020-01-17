export function addImage(src, callback) {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = src;
    imgElem.setAttribute('alt', 'My photo');
    pageElem.append(imgElem);


    const onImageLoaded = () => {
        // const { width, height } = imgElem;
        callback(null, { width: 200, height: 100 });
    }

    const onErrorLoad = () => {
        if (error) {
            callback('Image load failed');
            return;
        }
    }
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onErrorLoad);
}



// const onImageLoaded = (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     const { width, height } = data;
//     const sizeElem = document.querySelector('.image-size');
//     sizeElem.textContent = `${width} x ${height}`
// }

// addImage(src, onImageLoaded);