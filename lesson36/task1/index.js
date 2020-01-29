export const fetchUser = async userId => {

    const userObj = await fetch(`https://api.github.com/users/${userId}`)

    if (!userObj.ok) {
        return null;
    }
    
    const userData = await userObj.json();
    return userData;
}

fetchUser('github');