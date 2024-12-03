let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;  // Initial score
console.log("0 = Loss, 1 = Win, 0.5 = Tie");

function RPS(numb) {
    let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
     
    document.getElementById("resultDecision").innerHTML = "The computer chose: " + CompDecision;

    // Player chooses Rock
    if (numb === 0) {
        if (CompDecision == "Paper") {
            innerscore = 0; // Lose
        } else if (CompDecision == "Scissors") {
            innerscore = 1; // Win
        } else {
            innerscore = 0.5; // Tie
        }
    }

    // Player chooses Paper
    if (numb === 1) {
        if (CompDecision == "Rock") {
            innerscore = 1; // Win
        } else if (CompDecision == "Scissors") {
            innerscore = 0; // Lose
        } else {
            innerscore = 0.5; // Tie
        }
    }

    // Player chooses Scissors
    if (numb === 2) {
        if (CompDecision == "Rock") {
            innerscore = 0; // Lose
        } else if (CompDecision == "Paper") {
            innerscore = 1; // Win
        } else {
            innerscore = 0.5; // Tie
        }
    }

    // Display the score
    document.getElementById("score").innerHTML = "Score: " + innerscore;
}
