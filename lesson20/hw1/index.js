export class Order {
    constructor(price, city, type) {
        this.id = Math.random().toString();
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
        this.city = city;
        this.type = type;
    }
    checkPrice() {
        return this.price > 1000;
    }
    confirmOrder() {
        if (this.isConfirmed == false) {
            this.isConfirmed = true;
        }
        this.dateConfirmed = new Date();
    }
    isValidType() {
        if (this.type == 'Buy' || this.type == 'Sell') {
            return true;
        }
        return false;
    }
}