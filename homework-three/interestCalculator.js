// Interest formula: Total = Principle(1+Rate*Time)

const principalAmmount = document.getElementById("input1").value;
const rateAmmount = document.getElementById("input2").value;
const timeAmmount = document.getElementById("input3").value;

const totalInterest = 1 + rateAmmount + timeAmmount;
const totalAmmount = principalAmmount * totalInterest;

function interestTotal(){
    document.getElementById("giveResult").innerHTML += 
        "With a beginning principal of $" + 
        principalAmmount + 
        "and with a growth rate of " + 
        rateAmmount + 
        "% for" + 
        timeAmmount + 
        " years, your total interest will be $" + 
        totalInterest + 
        "with a grand total of $" + 
        totalAmmount;

}