export const addImage = (url, callback) => {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.src = url;
    imgElem.setAttribute('alt', 'My photo');
    pageElem.append(imgElem);

    const onImageLoad = () => {
        onErrorAppear(null, { width: 200, height: 100 });
    }

    const onErrorAppear = (error) => {
        if (error) {
            console.log(error);
            return;
        }
    }

    imgElem.addEventListener('load', onImageLoad);
    imgElem.addEventListener('error', () => onErrorAppear('Image load failed'));
}