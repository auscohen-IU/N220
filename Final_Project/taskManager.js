console.log("taskManager.js file connected!");

// Array consisting of users. Users consist of an object with a username and password.
const knownUsers = [
    { username: "admin", password: "Pa$5W0rd" }
];

// Login attempt function
function loginAttempt() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    const user = knownUsers.find(user => user.username === username);
    if (!user) {
        alert('Username not found. Please create an account.');
    } else {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$]).+$/;
        if (!passwordRegex.test(password)) {
            alert('ERROR: Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !, @, #, $).');
        } else if (user.password !== password) {
            alert('Incorrect password.');
        } else {
            alert('Login successful! Welcome to your task manager.');
            document.getElementById("secondButton").innerText = "Logout";
            document.getElementById("secondButton").onclick = logout;
        }
    }
}

// Logout function
function logout() {
    alert('You have been logged out.');
    document.getElementById("secondButton").innerText = "Add User";
    document.getElementById("secondButton").onclick = null; // Disable logout functionality
}

// Add task functionality
document.querySelector('button[type="button"]').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('div');
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input after adding task
    } else {
        alert('Please enter a task.');
    }
});
