// .js file connected?
console.log("taskManager.js file connected!");

// Username and Password variables
let username = document.getElementById("usernameInput").value;
let password = document.getElementById("passwordInput").value;

// Admin Login & Known Users
const adminLogin = {
    username:"admin",
    password:"admin"
};

 const knownUsers = [adminLogin];

//  Login function
function goodLogin(){
    document.getElementById("dashboard").innerHTML += dashboard
}
