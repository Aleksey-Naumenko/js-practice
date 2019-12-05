export const wallet = {
    transactions: [40, 359, 1244, 898, 15],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
}