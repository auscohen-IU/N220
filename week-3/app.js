// Simple Function

    // Syntax for a function.
    // Everything inside the currly brackets is what the funciton does.
    function simpleFunctionOne() {
        // Code here!
        document.getElementById("changeTxt").innerHTML = "Used a function to change this text!";
    }
    // Remember to call the funciton to use it!
    simpleFunctionOne();

// Another Simple Function

    function simpleFunctionTwo() {
        document.querySelector("body").innerHTML += "This function does not take parameters.";
        // .querySelector is more powerful than just a .getElementByID and can select more things.
        // Removing the + will make the JS take up the whole page.
        // JS will look at the "body" as one string and will add the text after it.

     }
    simpleFunctionTwo();

// Yet Another Simple Function

    function sayHelloWorld() {
        console.log("Hello, World!");
    }
    sayHelloWorld();

// Simple function with a parameter

    // Parameters go inside ()
    function sayFavoriteBand(bandName) {
        document.getElementById("favBand").innerHTML += bandName + "<br/>";
    }
    sayFavoriteBand("Into It. Over It.");
    sayFavoriteBand("King Gizzard & The Lizard Wizard");

// Another Simple function with a parameter

    function sayMyName(myName) {
        console.log(myName);
    }
    sayMyName("Say my name");
    sayMyName("Say my name");
    sayMyName("If no one is around you");

// Functions that do calculations

    function calcRectPerimeter(height, width) {
        const perimeter = 2 * height + 2 * width;
        // You can also do = 2 * (height + width);
        document.querySelector("#panswer").innerHTML += perimeter;
    }
    calcRectPerimeter(2, 4);

// Using Parameters: Rectangle Perimeter Calculator


// Simple Function: Square Foot Calculator

    function calcArea() {
        // .value takes the current value in that section.
        const height= document.getElementById("height").value;
        const width= document.getElementById("width").value;
        console.log("height", height);
        console.log("width", width);
        document.querySelector("#answer").innerHTML += "Area: "
        + height * width + "<br/>";
        // `Area: ${height * width} <br/>`; Would also work here.
    }
    // Dont need to call it. The onclick= will pull from the .js file and then run the function.

// Multiple Values Function: Rectangle Properties

    function calcRectAreaAndPeri(height, width){
        const perimeter = 2 * (height + width);
        const area = height * width;
        // The ${ }, is just a part of the syntax.
        // The ` character is left of the 1. IT IS NOT A ASTRISK(') OR COMMA(,).
        // `...` allows the .innerHTML to work across multiple things instead of having to type document.getElementByID("multiAnswer").innerHTML += "Height" + height + "<br/>"; for each thing.
        document.getElementById("multiAnswer").innerHTML += `
            Height: ${height} <br/>
            Width: ${width} <br/>
            Perimeter ${perimeter} <br/>
            Area: ${area} <br/><br/>
        `;
    }
    calcRectAreaAndPeri(5, 4);
    calcRectAreaAndPeri(2, 8);

// Button Functions

    // The button id myFunction is in the HTML. Pressing the button will look for the function in the .js file.
    function myFunction(){
        alert("Who goes there?");
    }

// Button Functions with Parameters

    // The "wizard" function is an onclick command described in the HTML file.
    function wizard(name, occupation){
        confirm("Welcome " + name + ", the" + occupation);
        // confirm(`Welcome ${name}, the ${occupation}`); also works here.
        document.getElementById("future").innerHTML += `Welcome ${name}, the ${occupation}!`;
    }   

// Another Button Function

    function addItem(){
        const newItem = prompt("Add Item: ");
        console.log(newItem);
    }

// Return Values

    function returnValue(color){
        return color;
    }
    alert(returnValue("green"));

// Reuse Function

    function calcCircleArea(radius){
        return 2 * Math.PI * radius;
    }
    document.getElementById("useOne").innerHTML += calcCircleArea(2);
    document.getElementById("useTwo").innerHTML += calcCircleArea(4);