function getMessagesForBestStudents(allGroup, badBoys) {
    let goodGirls = allGroup
        .filter(name => !badBoys.includes(name))
        .reduce(name => 'Good job ' + name);
    return goodGirls;
}