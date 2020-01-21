export const delay = delayInMillisec => {

    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, delayInMillisec);

        setTimeout(() => { reject() }, delayInMillisec);
        
    });
}

// delay(3000).then(() => console.log('Done'));