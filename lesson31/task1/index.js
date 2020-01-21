export const requestUserData = userId => {

    return new Promise((resolve, reject) => {
        if (userId == 'broken') {
            setTimeout(() => {
                reject();
            }, 500);
        } else {
            setTimeout(() => {
                resolve(() => {
                   return { name: 'John', age: 17, userId: userId, email: `${userId}@example.com` };
                });
            }, 1000);
        }
    });
}