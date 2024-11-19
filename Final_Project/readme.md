 ## GitHub Link
 >https://github.com/auscohen-IU/N220/tree/main/Final_Project/outline


## Final Project Info

#### Name: 

    Austin Cohen


#### Project Name:

    Personal Task Manager Web Application


#### What are the requirements? | [Canvas Link](https://iu.instructure.com/courses/2266362/assignments/16598858?module_item_id=33386779)
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


## Final Project Outline

#### Pre-Work:

1. Create the outline and fulfil basic requirements for the page.
    1. HTML
        1. Head
            - Title
            - (Styling)
        2. Body
            - Sections
                - Login
                - Blocks for list
                - Dashboard
        3. Link the .js file
    2. JAVASCRIPT
        1. Ensure that the .js file is connected with the HTML via a <ins>console.log("JavaScript Connected!");</ins>
    3. CSS
        1. Style the webpage myself or with the provided [CSS file](https://iu.instructure.com/courses/2266362/assignments/16598858?module_item_id=33386779) listed at the bottom of the assignment. 

>CSS is optional. I can style in the HTML file in necessary. 

#### Login Form:

1. Fields for **Username & Password**
    1. Input tags for both, but with different types:
        - Username:
            - type="text"
            - <input type="text">
        - Password:
            - type="password"
            - <input type="password" class="input">
