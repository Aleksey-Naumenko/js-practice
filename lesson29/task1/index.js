export const addImage = (url, callback) => {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = url;
    imgElem.setAttribute('alt', 'My photo');
    pageElem.append(imgElem);

    console.log(imgElem);


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
}

addImage('https://server.com/image.png', onImageLoaded);