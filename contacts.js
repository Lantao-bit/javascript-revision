let contactDatabase = [
    {
        "firstName": "John",
        "lastName": "Snow",
        "email": "johnsnow@gmai.com",
        "favorite": true,
        "priority": 1
    },
    {
        "firstName": "Elizabeth",
        "lastName": "Tan",
        "email": "elizabethtan@gmai.com",
        "favorite": true,
        "priority": 1
    },
    {
        "firstName": "Tony",
        "lastName": "Stark",
        "email": "johnsnow@gmai.com",
        "favorite": true,
        "priority": 1
    },

]

//console.log(contactDatabase);
function displayContactList() {
    for (let c of contactDatabase) {
        console.log(c.firstName, c.lastName, "(", c.email, ")");
        console.log("Priority:", c.priority, "Favoriate:", c.favorite);
        console.log();
    }
};

// displayContactList();

function addNewContact (contactDatabase, fname, lname, email, favorite, priority) {
    let newContact = {
        firstName: fname,
        lastName: lname,
        email: email,
        favorite: favorite,
        priority: priority
    }
    contactDatabase.push(newContact);
}
addNewContact(contactDatabase,"Mary", "Sue", "marysue@gmail.com", false, 3);
displayContactList();