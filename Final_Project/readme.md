## Final Project Info

### Name: 

    Austin Cohen

### Live URL:
  http://127.0.0.1:5500/N220/Final_Project/taskManager.html

### Project Name:

    Personal Task Manager Web Application

## What are the requirements? | [Canvas Link](https://iu.instructure.com/courses/2266362/assignments/16598858?module_item_id=33386779)

 ### GitHub Link | [Github](https://github.com/auscohen-IU/N220/tree/main/Final_Project)


- Login Form
    - Password must be an input type password
    - Password must be at least 8 characters long
    - Password must contain at least 1 number
    - Password must contain at least 1 capital number
    - Username and password must NOT be empty
    - Inform users if the username or password is invalid based on criteria above
    - They should only be informed for what needs corrected

- Dashboard
    - Show who is logged in
    - Give a button for logging out
    - Show all tasks and signify which are marked as complete

- Tasks
    - Allow users to add new tasks to the list
    - Allow users to mark a task as complete
    - Allow users to remove a task from the list
    - Allow users to change the text of the task
    - Allow users to assign an additional property of the task

- Additional Features
    - Allow users to manage options for the additional property
    - Tie tasks to the user signed in
    - Allow users to see only tasks that they have created

---


### **Login Form**

#### DOM References:

- **usernameInput:** 
    - Reference to the username input field in the form.
- **passwordInput:** 
    - Reference to the password input field in the form.
- **loginButton:** 
    - Reference to the login button that triggers the login process.

#### Logic:

- **Username Validation:**
  - If the username is empty, display an error message prompting the user to fill in the username.
  
- **Password Validation:**
  - If the password is empty, display an error message prompting the user to fill in the password.
  - If the password is shorter than 8 characters, display a message asking for a longer password.
  - If the password does not contain at least one uppercase letter, display an error message.
  - If the password does not contain at least one number, display an error message.

#### Events:

- **Login Button Click:** 
    - When the login button is clicked, the form's input values are validated using the above logic, and the user is either allowed to proceed or prompted to fix errors.

---

### **Dashboard**

#### DOM References:

- **taskList:** 
    - A reference to the container where the list of tasks will be displayed.
- **addTaskButton:** 
    - Reference to the button used to add new tasks.
- **taskInput:** 
    - Reference to the input field where users enter new tasks.
- **logoutButton:** 
    - Reference to the button used to log out and return to the login screen.

#### Logic:

- **Display Task List:** 
  - Loop through the array of tasks and create elements to display each task in the list.

- **Add Task:**
  - When the "Add Task" button is clicked, the task input value is added to the tasks array, and the task list is re-rendered.

- **Logout Functionality:**
  - When the logout button is clicked, redirect the user back to the login page.

---

### **Task Manipulation**

#### DOM References:

- **taskList:** 
    - Reference to the task list in the DOM.
- **deleteButtons:** 
    - Each task will have a corresponding delete button.

#### Logic:

- **Task Data Structure:** 
  - Each task is stored as an object with properties such as `id` (unique identifier) and `description` (task text).

- **Display Tasks with Delete Button:**
  - When rendering tasks, a delete button is created next to each task. When clicked, the respective task is removed from the list.

- **Delete Task:**
  - When a task's delete button is clicked, the task is removed from the array based on its `id`, and the task list is re-rendered.

- **Loops and Conditions:**
  - A loop is used to iterate through the task list and display each task.
  - An `if` condition checks whether a task matches the selected ID for deletion.

---
