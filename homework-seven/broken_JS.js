let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"];
let innerscore = 0;
console.log("0 = Loss, 1 = Win, 0.5 = Tie");

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
     
  document.getElementById("resultDecision").innerHTML = "The computer chose: " + Boolean(CompDecision)
    // I don't think this bit is necessary because we don't have four outcomes Only [0, 1, 2]. 
      // if (numb === 3) {
      //   innerscore = 0.5;
      // }

      // Player chooses Rock
      if (numb === 0) {
        if (CompDecision == "Paper") {
        innerscore = 0; //Lose
        }
        else if (CompDecision == "Scissors") {
        innerscore = 1; //Win
        }
        else {innerscore = 0.5} //Tie
      }

      // Player chooses Paper
      if (numb === 1) {
        if (CompDecision == "Rock") {
        innerscore = 1; //Win
        }
        else if (CompDecision == "Scissors") {
        innerscore = 0; //Lose
        }
        else {innerscore = 0.5} //Tie
      }

      // Player chooses Scissors
      if (numb === 2) {
        if (CompDecision == "Rock") {
        innerscore = 0; //Lose
        }
        else if (CompDecision == "Paper") {
        innerscore = 1; //Win
        }
        else {innerscore = 0.5} //Tie
      }

      // Display score
      document.getElementById("Score").innerHTML = innerscore;
    }