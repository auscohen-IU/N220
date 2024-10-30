// 0 - Starting the Adventure
let playerChoice = ""; // Variable to store the player's choice
let isFinished = false;

function initiateAdventure() {
    document.getElementById("adventureStart").innerHTML = "You wake up in a dark room. What will you do?" +
    `
        <br/><br/>
        <button onclick="handleFirstChoice('openEyes')">Open your eyes!</button>
        <button onclick="handleFirstChoice('lightTorch')">Light a torch!</button>
        <br/><br/>
    `;
}

// 0.5 - Game Over
function endGame() {
    isFinished = true;
    if (isFinished) {
        alert("Game Over!");
    }
}

// 1 - First Choice
function handleFirstChoice(selectedChoice) {
    playerChoice = selectedChoice; // Store the selected choice

    if (playerChoice === 'openEyes') {
        revealCaveScene();
    } else if (playerChoice === 'lightTorch') {
        illuminateCave();
    }
}

function revealCaveScene() {
    document.getElementById("choiceOne").innerHTML = "You open your eyes! <br/> You find yourself at the bottom of a cave system. It doesn't appear that anyone has seen you yet." + 
    `
        <br/><br/>
        <button onclick="secondChoiceEyes('attemptStealth')">Attempt stealth...</button>
        <button onclick="secondChoiceEyes('exploreCave')">Explore the bottom of the cave!</button>
        <br/><br/>
    `;
}

function illuminateCave() {
    document.getElementById("choiceOne").innerHTML = "You light a torch! <br/> You appear to be at the bottom of a cave system. The light from the torch alerts a nearby Goblin!" +
    `
        <br/><br/>
        <button onclick="secondChoiceTorch('counterAttack')">Perform a Counter!</button>
        <button onclick="secondChoiceTorch('counterDodge')">Quickly Dodge!</button>
        <br/><br/>
    `;
}

// 2 - Second Choices | openEyes() and illuminateCave()
// openEyes()
function secondChoiceEyes(selectedChoice) {
    playerChoice = selectedChoice; // Store the selected choice

    if (playerChoice === 'attemptStealth') {
        attemptStealth();
    } else if (playerChoice === 'exploreCave') {
        exploreCave();
    }
}

function attemptStealth() {
    document.getElementById("choiceTwo").innerHTML += "You crouch down, trying to conceal your sound as much as possible. You see a staircase that looks like it leads out of the cave, but you notice that you don't have any of your equipment with you!" +
    `
        <br/><br/>
        <button onclick="handleThirdChoiceFromStealth('climbStaircase')">Go upstairs...</button>
        <button onclick="handleThirdChoiceFromStealth('searchForEquipment')">Look for your equipment!</button>
        <br/><br/>
    `;
}

function exploreCave() {
    document.getElementById("choiceTwo").innerHTML += "You begin to explore the surrounding cave system. The area is dark and damp, but you've started to adjust to the light. You hear the sounds of running water in the distance, but also a slight breeze in the opposite direction. Which will you follow?" +
    `
        <br/><br/>
        <button onclick="handleThirdChoiceFromExplore('followWater')">Follow the water!</button>
        <button onclick="handleThirdChoiceFromExplore('followBreeze')">Follow the breeze!</button>
        <br/><br/>
    `;
}

// illuminateCave()
function secondChoiceTorch(selectedChoice) {
    playerChoice = selectedChoice;

    if (playerChoice === 'counterAttack') {
        counterAttack();
    } else if (playerChoice === 'counterDodge') {
        counterDodge();
    }
}

function counterAttack() {
    document.getElementById("choiceTwo").innerHTML += "You prepare yourself for the Goblin charge. Planting your feet, you redirect the Goblin's momentum, throwing it into the wall of the cave. Thankfully, they're not too big and you're not too hurt. You should keep moving, but the Goblin might have some equipment on him..." +
    `
        <br/><br/>
        <button onclick="handleThirdChoiceFromMovingOn('keepMovingForward')">I should keep moving...</button>
        <button onclick="handleThirdChoiceFromMovingOn('searchBeatenGoblin')">The Goblin might have my things!</button>
        <br/><br/>
    `;
}

function counterDodge(){
    document.getElementById("choiceTwo").innerHTML += "You swiftly dodge the oncoming attack of the Goblin. Without your gear, you find yourself quite nimble on your feet. The real question is, are you nimble enough to outrun the Goblin, or fast enough to take it down now?";
    `
    <br/><br/>
    <button onclick="handleThirdChoiceFromDodge('standYourGround')">Stand your ground!</button>
    <button onclick="handleThirdChoiceFromDodge('fleeFromDodge')">Attempt to flee!</button>
    <br/><br/>
    `
}

// 3 - Third Choices
function handleThirdChoiceFromMovingOn(selectedChoice) {
    playerChoice = selectedChoice;

    if (playerChoice === 'keepMovingForward') {
        keepMovingForward();
    } else if (playerChoice === 'searchBeatenGoblin') {
        searchBeatenGoblin();
    }
}

function handleThirdChoiceFromStealth(selectedChoice) {
    playerChoice = selectedChoice;

    if (playerChoice === 'climbStaircase') {
        climbStaircase();
    } else if (playerChoice === 'searchForEquipment') {
        searchForEquipment();
    }
}

function handleThirdChoiceFromExplore(selectedChoice) {
    playerChoice = selectedChoice;

    if (playerChoice === 'followWater') {
        followWater();
    } else if (playerChoice === 'followBreeze') {
        followBreeze();
    }
}

function handleThirdChoiceFromDodge(selectedChoice){
    playerChoice = selectedChoice;

    if(playerChoice==='standYourGround'){
        standYourGround()
    }
    else if(playerChoice==='fleeFromDodge'){
        fleeFromDodge()
    }
}

// 4 - Results
function climbStaircase() {
    document.getElementById("choiceThree").innerHTML += "You slowly make your way up the staircase, listening to the voices echoing through the cave. You reach the top, but an arrow hits you in the back, causing you to fall down.";
    endGame();
}

function searchForEquipment() {
    document.getElementById("choiceThree").innerHTML += "You look around cautiously for your gear. Unfortunately, Goblin guards appear from every direction, and your escape plan falls apart...";
    endGame();
}

function followWater() {
    document.getElementById("choiceThree").innerHTML += "You follow the water, but suddenly, an eel bites your leg. You bleed out, and the water around you grows warmer.";
    endGame();
}

function followBreeze() {
    document.getElementById("choiceThree").innerHTML += "You follow the breeze and stumble into a Goblin feast. One of them spots you and declares, 'Looks like meat is back on the menu, boys!'";
    endGame();
}

function keepMovingForward(){
    document.getElementById("choiceThree").innerHTML += "You don't have time to loot! Where there is one Goblin, there are dozens. You pick a direction and start moving. You know that you are not alone, but as long as you stay calm, you can find your way out of this nest. You venture further into the cave.";

    endGame();
}

function standYourGround(){
    document.getElementById("choiceThree").innerHTML += "You grit your teeth and smile as hard as you can. If you're going down, you're going down with a fight. The Goblin takes note of your calmness, then smiles.<br/> It was hoping you would do that<br/>An arrow pierces your chest from somewhere in the darkness. You become pinned to the wall behind you as the Goblin charges forth. This time, you are unable to dodge...";

    endGame();
}

function fleeFromDodge(){
    document.getElementById("choiceThree").innerHTML += "You begin to sprint! The only thing that provides a bit of comfort is the torch you carry. But that torch makes you a highly visible target, as you find an arrow begins sticking out of your back. You fall to the ground.";

    endGame();
}

// trueEnding()
function searchBeatenGoblin(){
    document.getElementById("choiceThree").innerHTML += "You take a moment to search the Goblin's body. You find some of your equipment! While it's not much, it does mean that you have a small shield and a knife to defend yourself with. With this, you feel a glimmer of hope.";
    `
    <br/><br/>
    <button onclick="trueEnding()">Leave the cave.</button>
    <br/><br/>
    `
}

function trueEnding(){
    document.getElementById("choiceFour").innerHTML += "You are the ax that clears the forrest. Gifted with knowledge and hope, you venture forth up the staircase. You know that somewhere there is a archer, watching the door and waiting for a target to appear. Down below, the caves host dangers of all kinds. Goblins, Eels, the darkness. The only thing to do is to pick up what you can and keep moving. Goblins are sure to have heard you, but now that you're armed, you are the most dangerous thing in this cave. You are the ax that clears the forrest. Leave this place of your own accord.";

    alert("Congratulations!");
}