let contactDatabase = [
    {
        id: 1,
        "firstName": "John",
        "lastName": "Snow",
        "email": "johnsnow@gmail.com",
        "favorite": true,
        "priority": 1
    },
    {
        id: 2,
        "firstName": "Elizabeth",
        "lastName": "Tan",
        "email": "elizt@gmail.com",
        "favorite": true,
        "priority": 1
    },
    {
        id: 3,
        "firstName": "Tony",
        "lastName": "Stark",
        "email": "johnsnow@gmail.com",
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

function addNewContact(contactDatabase, fname, lname, email, favorite, priority) {
    let newContact = {
        id: Math.floor(Math.random() * 100000) + 1,
        firstName: fname,
        lastName: lname,
        email: email,
        favorite: favorite,
        priority: priority
    }
    contactDatabase.push(newContact);
}
addNewContact(contactDatabase, "Mary", "Sue", "marysue@gmail.com", false, 3);
//displayContactList();



function deleteContactByEmail(contactDatabase, eamil) {
    // need a way uniquely identify a contact
    let wantedIndex = null;
    for (let i = 0; i < contactDatabase.length; i++) {
        let currentContact = contactDatabase[i];
        if (currentContact.eamil == eamil) {
            wantedIndex = i;
            break;
        }
    }
    contactDatabase.splice(wantedIndex, 1);
}

// call the function
deleteContactByEmail(contactDatabase, "elizt@gmail.com");

displayContactList();