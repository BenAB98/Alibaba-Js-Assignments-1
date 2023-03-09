"use strict"

const users = [
    {
        firstName: "Behnam",
        id: 1
    },
    {
        firstName: "Hesam",
        id: 2
    },
    {
        firstName: "AhmadReza",
        id: 3
    },
    {
        firstName: "Mehdi",
        id: 4
    },
    {
        firstName: "Fateme",
        id: 5
    },
    {
        firstName: "Razie",
        id: 6
    },
    {
        firstName: "Farnaz",
        id: 7
    },
    {
        firstName: "Noura",
        id: 8
    }
];

function showAllUsers() {
    // return users;
    for (const iterator of users) {
        console.log(iterator);
    }
}
// console.log(showAllUsers());
// showAllUsers();

function getUserById(id) {
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].id===id) return users[i];
    // }
    // return "user not found";
    const selectedUser = users.find((user) => user.id === id);
    if (selectedUser === undefined) return "user not found";
    else return selectedUser;
}

// console.log(getUserById(8));

function createUser(firstName, id = users.length + 1) {
    users.push({ firstName, id });
}

// createUser("Hossein");
// console.log(users);

function editUser(id, firstName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].firstName = firstName;
            return users;
        }
    }
    return "user not found";
}

// console.log(editUser(2, "Hesam Rahmani"));