function withdraw(clients, balances, client, amount) {
    if (balances[clients.indexOf(client)] < amount) {
        return -1;
    }
    let restOnBalance = balances[clients.indexOf(client)] - amount;
    return restOnBalance;
}

