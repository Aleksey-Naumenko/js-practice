export class Wallet {
        balance = 0;
    getBalance() {
        return this.balance;
    }
    deposit(depo) {
        return this.balance += depo;
    }
    withdraw(withdr) {
        if (this.balance < withdr) {
            console.log('No enough funds');
            return;
        }
        return this.balance -= withdr;
    }
}