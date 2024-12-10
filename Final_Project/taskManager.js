// .js file connected?
console.log("taskManager.js file connected!");

// Variables for login info
const username = document.getElementById("usernameInput").value;
const password = document.getElementById("passwordInput").value;

// Array consisting of users. Users consist of an object with a username and password.
const knownUsers = [
    {username:"admin", password:"Pa$5W0rd"}
]

// Login button checks to see if the inputted username and password is an object in the knownUsers[]
function loginAttempt(){
    // Check if the username exists in the knownUsers array
    const user = knownUsers.find(user => user.username === usernameInput);
    if (!user) {
        // If username does not exist, prompt the user to create an account
        alert('Username not found. Please create an account.');
    } else {
        // If the username exists, check if the password matches
        if (user.password !== passwordInput) {
            // If the password does not match, show an error
            alert('ERROR: Incorrect password.');
        } else {
            // If the username and password match, proceed to the next step (e.g., dashboard)
            alert('Login successful! Welcome to your task manager.');
            // You can redirect or load the task manager page here
        }
    }
}