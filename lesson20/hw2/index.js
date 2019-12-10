export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get userId() {
        return this._id;
    }
    get userName() {
        return this._name;
    }
    get usersessionId() {
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get usersArr() {
        return this._users;
    }
    getUserNames() {
        return this.usersArr.map(item => item.userName);
    }
    getUserIds() {
        return this.usersArr.map(item => item.userId);
    }
    getUserNameById(id) {
        return this.usersArr
            .filter(item => item.userId === id)
            .map(item => item.userName);
    } 
}

// let usersArr = [
//     new User(12, 'Alex', 0.1233),
//     new User(123, 'John', 0.14324),
//     new User(124, 'Mike', 0.131231),
// ];
