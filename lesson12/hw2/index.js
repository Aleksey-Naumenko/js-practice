function cleanTransactionsList(transactions) {
    return transactions
        .map(item => Number(item))
        .filter(item => isFinite(item))
        .map(item => `$${item.toFixed(2)}`);
}