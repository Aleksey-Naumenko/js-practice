function withdraw(clients, balances, client, amount) {
    if (balances[clients.indexOf(client)] < amount) {
        return -1;
    }
    return balances[clients.indexOf(client)] - amount;
}

