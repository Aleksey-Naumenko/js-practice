export const addImage = (url, callback) => {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = url;
    imgElem.setAttribute('alt', 'My photo');
    pageElem.append(imgElem);

    console.log(imgElem);


    const onImageLoad = () => {
        callback(null, { width: 200, height: 100 });
        console.log('Must work');
    }

    const onErrorAppear = () => {
            callback('Image load failed');
    }

    imgElem.addEventListener('load', onImageLoad);
    imgElem.addEventListener('error', onErrorAppear);
}

const onImageLoaded = (error, data) => {

    if (error) {
        console.log(error);
        return;
    }
}

addImage('https://klike.net/uploads/posts/2019-01/1547367999_1.jp', onImageLoaded);