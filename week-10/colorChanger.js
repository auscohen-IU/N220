/**
 * @type { { currentColor: string, lastColors: string } [] }
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
    
    userColors.push({ currentColor: newColorValue, });
    newColorRef.value = "#000000";

    showUserColors();
}

/**
 * @description Loops through userColors list and populates them on the page.
 */
function showUserColors(){
    const colorSquares = document.getElementById("color-squares");
    colorSquares.innerHTML = "";

    for (let i = 0; i < userColors.length; i++) {
        const userColor = userColors[i];
        colorSquares.innerHTML += 
        `<div>
            <div style="height: 100px; width: 100px; padding: 50px: background-color: ${userColor.currentColor}" onclick="openColorChanger(${i})">
                <input 
                    type="color" 
                    id="user-color-${i}" 
                    name="user-color-${i}" 
                    hidden 
                    value="${userColor.currentColor}"
                <div>
                    <button onclick=changeUserColor(${i}")>Update Color</button>
                    <button onclick=revertUserColor(${i}")>Revert Color</button>

                </div>
            </div>
        </div>`;

        showUserColors();
    }; 
}

function changeUserColor(userColorIndex){
    const userColorRef = document.getElementById(`user-color-${userColorIndex}`);

    const lastColor = userColors[userColorIndex].currentColor;
    const newUserColor = {
        currentColor: userColorRef.value,
        lastColor: lastColor, 
    };
    userColors.splice(userColorIndex, 1, newUserColor);

    showUserColors();
}

function revertUserColor(){}

function openColorChanger(userColorIndex){
    console.log(userColorIndex);
    document.getElementById(`user-color-${userColorIndex}`).click();
}
