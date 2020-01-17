function randomDelay() {
    return Math.ceil(Math.random() * 3) * 1000;
}

export function requestUserData(userId, callback) {

    setTimeout(() => {
        if (userId == 'broken') {
            callback(null, 'Failed to load user data');
        } else {
            callback(
                {
                    name: 'John',
                    age: 17,
                    userId: userId,
                    email: `${userId}@example.com`,
                }
            );
        }
    }, randomDelay());
}

function requestCallBack(user, error) {
    if (error) {
        console.log(error);
        return;
    }
    return user;
}

console.log(requestUserData('agent007', requestCallBack));
// console.log(randomDelay());