// Interest formula: Total = Principle(1+Rate*Time)

// Set Principal, Rate, and Time to the numbers in inputs.
const principalAmmount = parseFloat(document.getElementById("pInput").value);
const growthRate = parseFloat(document.getElementById("rInput").value);
const timeAmmount = parseFloat(document.getElementById("tInput").value);


// Interest rate is the formula below. grandTotal is the final amount of money someone will have.
const totalInterest = (1 + (growthRate * timeAmmount));
const grandTotal = (totalInterest * principalAmmount);


// finalResults() should result in the text being displayed at the bottom of the page along with the calculations. 
function finalResults(){
    document.querySelector("#giveResult").innerHTML += "With a beginning principal of $" + principalAmmount + " and with a growth rate of " + growthRate + "% for " + timeAmmount + " years, your total interest will be $" + totalInterest + " with a grand total of $" + grandTotal + ". <br/><br/>";
}