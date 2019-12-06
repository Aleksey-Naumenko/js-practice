export default user = {
    firstName  = 'John',
    lastName = 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(nameOfUser) {
        let [firstName, lastName] = nameOfUser.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}