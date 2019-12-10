export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames() {
        return this.users.map(item => item.name);
    }
    getUserIds() {
        return this.users.map(item => item.id);
    }
    getUserNameById(id) {
        return this.users
            .filter(item => item.id === id)
            .map(item => item.name);
    } 
}

// let usersArr = [
//     new User(12, 'Alex', 0.1233),
//     new User(123, 'John', 0.14324),
//     new User(124, 'Mike', 0.131231),
// ];
