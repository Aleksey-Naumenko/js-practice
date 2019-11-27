function getMessagesForBestStudents(allGroup, badBoys) {
    let goodGirls = allGroup
        .filter(name => !badBoys.includes(name))
        .map(name => 'Good job, ' + name);
    return goodGirls;
}