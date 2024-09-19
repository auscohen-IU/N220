function finalResults() {
    // Get the values from the input fields
    const principalAmmount = parseFloat(document.getElementById("pInput").value);
    const growthRate = parseFloat(document.getElementById("rInput").value) / 100; // Convert to decimal
    const timeAmmount = parseFloat(document.getElementById("tInput").value);


    // Calculate total interest and grand total
    const totalInterest = principalAmmount * growthRate * timeAmmount; // Correct formula for interest
    const grandTotal = principalAmmount + totalInterest; // Grand total including principal

    // Display results
    document.querySelector("#giveResult").innerHTML = 
        "With a beginning principal of $" + principalAmmount.toFixed(2) +
        " and with a growth rate of " + (growthRate * 100).toFixed(2) + "% for " +
        timeAmmount + " years, your total interest will be $" + totalInterest.toFixed(2) +
        " with a grand total of $" + grandTotal.toFixed(2) + ". <br/><br/>";
}
