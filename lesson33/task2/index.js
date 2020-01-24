const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const daysInputElem = document.querySelector('.days-form__input');
const userIdInputElem = document.querySelector('.userid-form__input');
const repoIdInputElem = document.querySelector('.repoid-form__input');

const userDataHandler = () => {
    const userId = userIdInputElem.value;
    const repoId = repoIdInputElem.value;
    const days = daysInputElem.value;
    return getMostActiveDevs( {userId, repoId, days} );
}


const getMostActiveDevs = ( {userId, repoId, days} ) => {
  
    const dateToStartFrom = new Date(new Date().setDate(new Date().getDate() - days));

    const mostActiveUsers = fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(data => {
            const objOfUsers = data
                .map(({ commit: { author: { email, date, name } } }) => {
                    return { email, date, name };
                })

                .filter(commit => new Date(commit.date) > dateToStartFrom)

                .reduce((acc, { email, name }) => {
                    const oldCount = acc[email] ? acc[email].count : 0;
                    return {
                        ...acc,
                        [email]: { name, email, count: oldCount + 1 }
                    };
                }, {});

            let theBiggestCount = 0;
            let newObj;
            Object.entries(objOfUsers)
                .forEach(user => {
                    if (user[1].count > theBiggestCount) {
                        theBiggestCount = user[1].count;
                        newObj = user[1];
                    }
                    });

            return [newObj];
        })
        // console.log(mostActiveUsers);
    return mostActiveUsers;
};

//   Aleksey-Naumenko


const fetchUserData = userId => fetch(`https://api.github.com/users/${userId}`)
        .then(response => response.json());

const onSearchUserAvatar = () => {
    const userId = userIdInputElem.value;
    fetchUserData(userId)
        .then(userData => renderUserData(userData));
};

const renderUserData = data => {
    console.log(data);
    const { avatar_url, login } = data;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = login;
};

showUserBtnElem.addEventListener('click', onSearchUserAvatar);