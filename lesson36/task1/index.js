export const fetchUser = async userId => {
    try {
        const userObj = await fetch(`https://api.github.com/users/${userId}`)
        if (!userObj.ok) {
            return null;
        }
        const userData = await userObj.json();
        return userData;
    } catch (e) {
        throw new Error('Failed to fetch user');
    }
}

fetchUser('github')
    .then(userData => console.log(userData))
    .catch(e => alert(e.message));