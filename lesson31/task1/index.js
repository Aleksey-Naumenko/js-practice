export const requestUserData = userId => {

    return new Promise((resolve, reject) => {
        if (userId == 'broken') {
            setTimeout(() => {
                reject(new Error('You are broken'));
            }, 500);
        } else {
            setTimeout(() => {
                resolve( { name: 'John', age: 17, userId: userId, email: `${userId}@example.com` } );
            }, 1000);
        }
    });
}

requestUserData('broken')
    .then(data => console.log(data))
    .catch(error => console.log(error));
// console.log(requestUserData('broken'));