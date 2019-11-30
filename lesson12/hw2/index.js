function cleanTransactionsList(transactions) {
    return transactions
        .map(item => Number(item)) // item.toString().trim())
        .filter(item => isFinite(item))
        .map(item => `$${item.toFixed(2)}`);
}