function sortContacts(contacts, boolValue) {
    if (!Array.isArray(contacts)) return null;

    let sortedArr = contacts
        .sort((a, b) => boolValue ? 
            a.name.localCompare(b.name) : b.name.localCompare(a.name));

    return sortedArr;
}