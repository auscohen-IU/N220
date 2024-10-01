// Create 2 reference variables for the inputs on the HTML
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

// Create a reference variable for the output
const output = document.getElementById("output");

// Function for adding the 2 numbers
// The parseFloat() function parses a string argument and returns a floating point number.
function addNums(){
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    output.innerHTML = sum;
}

// Function for multiplying the 2 numbers
function timesNums(){
    const product = num1.value * num2.value;
    output.innerHTML = product;
}