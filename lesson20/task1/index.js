export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    static createEmpty() {
        return new User(name, age);
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    };

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };

    setAge(age) {
        if (age < 0) return false;
        if (age >= 25) {
            this.requestNewPhoto();
        };
        this.age = age;
        return age;
    };
}