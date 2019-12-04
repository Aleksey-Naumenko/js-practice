export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        let q = fullName.split(' ');
        [this.firstName, this.lastName] = q;
    }
}