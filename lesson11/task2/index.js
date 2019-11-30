function sortContacts(contacts, boolValue = true) {
    if (!Array.isArray(contacts)) return null;

    let sortedArr = contacts
        .sort((a, b) => boolValue ? 
            a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    return sortedArr;
}