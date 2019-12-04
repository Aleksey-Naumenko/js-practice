export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${firstName} ${lastName}`;
    },
    setFullName(fullName) {
        let q = fullName.split(' ');
        [this.firstName, this.lastName] = q;
    }
}