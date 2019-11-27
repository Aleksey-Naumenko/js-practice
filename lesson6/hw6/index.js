function withdraw(clients, balances, client, amount) {
    let restOnBalance = balances[clients.indexOf(client)] - amount;
    return restOnBalance;
}

