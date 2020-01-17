function randomDelay() {
    return Math.ceil(Math.random() * 3);
}

export function requestUserData(userId, callback) {

    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
    } else {
        setTimeout(() => {
            callback(
                {
                    name: 'John',
                    age: 17,
                    userId: userId,
                    email: `${userId}@example.com`,
                }
            );
        }, randomDelay());
    }
}

function requestCallBack(userId, error) {
    if (error) {
        console.log(error);
        return;
    }
    return user;
}

console.log(requestUserData('id007', requestCallBack));
// console.log(randomDelay());