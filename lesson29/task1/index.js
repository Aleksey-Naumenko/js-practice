export function addImage(src, callback) {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = src;
    imgElem.setAttribute('alt', 'My photo');
    pageElem.append(imgElem);


    const onImageLoaded = () => {
        callback(null, { width: 200, height: 100 });
    }

    const onErrorAppear = () => {
            callback('Image load failed');
    }

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', onErrorAppear);
}



const onImageLoaded = (error, data) => {

    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`
}

addImage('https://server.com/image.png', onImageLoaded);