/**
 * @type { { currentColor: string, lastColor: string } [] }
 * @description This is a list of colors that the user added.
 */


// control + space toggles in-depth look. Look at this later!

// Test to see if JS was linked
console.log("Hi, I'm Patrick!");

// To keep track of user colors
const userColors = [];


/**
 * @type {function}
 * @description Get's the color from user input to add to the userColors list
 */
// Create a function to add new color
function addNewColorItem() {
    const newColorRef = document.getElementById("newColorItem");
    const newColorValue = newColorRef.value;
    console.log(newColorItem.value);
    
    userColors.push({ currentColor: newColorValue });
    newColorRef.value = "#000000";

    showUserColors();
}

/**
 * @description Loops through userColors list and populates them on th page.
 */
function showUserColors(){
    const colorSquares = document.getElementById("color-squares");
    colorSquares.innerHTML = "";

    for (let i = 0; i < userColors.length; i++) {
        const userColor = userColors[i];
        colorSquares.innerHTML += 
        `
        <div style="height: 50px; width: 50px; background-color: ${userColor.currentColor}" onclick="openColorChanger(${i}")>
            <input 
                type="color" 
                id="user-color-${i}" 
                name="user-color-${i}" 
                hidden 
                value="${userColor.currentColor}"
                onchange="changeUserColor(${i})"
            />
        </div>
        `;
    }
}

function changeUserColor(userColorIndex){
    const userColorRef = document.getElementById(`user-color-${userColorIndex}`);
    console.log(userColorRef.value);
}

function openColorChanger(userColorIndex){
    console.log(userColorIndex);
    document.getElementById(`user-color-${userColorIndex}`).click();
}