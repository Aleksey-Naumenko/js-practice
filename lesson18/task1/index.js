export const event = {
    name: 'John',
    message: 'Welcome to the party!',
    guests: [{ name: 'John', age: 14, email: 'a@server.com' },
            { name: 'Bob', age: 26, email: 'e@server.com' },
            { name: 'Jane', age: 9, email: 'd@server.com' },
            { name: 'Jack', age: 23, email: 'r@server.com' },
            ],

    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({ 
                email, 
                message: `Dear ${name}! ${this.message}`,
            }))
    }
}