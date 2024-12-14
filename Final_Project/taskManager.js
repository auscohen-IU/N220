// Global variables to store users, current user, tasks, and a task ID counter
let currentUser = null;
let tasks = [];
let taskIdCounter = 1;

// Example user data (hardcoded for simplicity)
const users = [
    { username: 'johnDoe', password: 'Password123', tasks: [] }
];

// Log known users and their passwords in the console
console.log("Known users and passwords:");
users.forEach(user => {
    console.log(`Username: ${user.username}, Password: ${user.password}`);
});

// Function to validate login
function validateLogin() {
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const user = users.find(user => user.username === username);

    // Validate username and password
    if (username === '') {
        alert('Please fill in the username.');
        return false; 
    }

    if (password === '') {
        alert('Please fill in the password.');
        return false;
    }

    if (!isValidPassword(password)) {
        alert('Password must be at least 8 characters long, contain at least 1 number, and 1 uppercase letter.');
        return false; 
    }

    // If user doesn't exist, prompt to create a new one
    if (!user) {
        const createNewUser = confirm(`No user found with username "${username}". Would you like to create a new account?`);

        if (createNewUser) {
            const newPassword = prompt('Please enter a password for your new account:');

            if (newPassword && isValidPassword(newPassword)) {
                const newUser = {
                    username: username,
                    password: newPassword,
                    tasks: []
                };

                users.push(newUser);
                console.log(`New user created: Username: ${newUser.username}, Password: ${newUser.password}`);
                alert('Account created successfully! You can now log in with your new credentials.');
            } else {
                alert('Password does not meet the required criteria.');
            }
        } else {
            alert('You can try again with a valid username or password.');
        }

        return false;
    }

    // Validate user login
    if (user.password !== password) {
        alert('Invalid password.');
        return false; 
    }

    // Successful login
    currentUser = user;
    console.log(`User logged in: Username: ${currentUser.username}, Password: ${currentUser.password}`);
    showDashboard();
    return false;
}

// Helper function to validate password
function isValidPassword(password) {
    return password.length >= 8 &&
           /\d/.test(password) && // At least one number
           /[A-Z]/.test(password); // At least one uppercase letter
}

// Function to show the dashboard and tasks
function showDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.getElementById('userName').textContent = currentUser.username;
    renderTasks();
}

// Function to render tasks on the dashboard
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Loop through the tasks array and display each task
    currentUser.tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        taskItem.innerHTML = `
            <span>${task.description}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
            <button onclick="moveTask(${index}, 'up')">Move Up</button>
            <button onclick="moveTask(${index}, 'down')">Move Down</button>
        `;
        taskList.appendChild(taskItem);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription === '') return;

    // Create a new task object with a unique ID using the taskIdCounter
    const newTask = {
        id: taskIdCounter++,
        description: taskDescription
    };

    // Add the new task to the current user's tasks array
    currentUser.tasks.push(newTask);
    taskInput.value = '';
    renderTasks(); 
}

// Function to delete a task
function deleteTask(taskId) {
    currentUser.tasks = currentUser.tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Function to move a task up or down
function moveTask(index, direction) {
    if (direction === 'up' && index > 0) {
        // Swap the task with the one above
        [currentUser.tasks[index], currentUser.tasks[index - 1]] = [currentUser.tasks[index - 1], currentUser.tasks[index]];
    } else if (direction === 'down' && index < currentUser.tasks.length - 1) {
        // Swap the task with the one below
        [currentUser.tasks[index], currentUser.tasks[index + 1]] = [currentUser.tasks[index + 1], currentUser.tasks[index]];
    }

    renderTasks();
}

// Function to log the user out
function logout() {
    currentUser = null;
    tasks = [];
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('dashboardContainer').style.display = 'none';
}
