// .js file connected?
console.log("taskManager.js file connected!");

// Username and Password values
let username = document.getElementById("usernameInput").value;
let password = document.getElementById("passwordInput").value;

// Known Users
const knownUsers = [
    {username = "admin", password = "admin"}
]

const user = knownUsers.find(user => user.username === username)

// Login button runs the check
function loginCheck {
    
}