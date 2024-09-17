// Dating Section
let numberOfPeople = 3;
const ticketCost = 14;
var totalCost = numberOfPeople * ticketCost;

document.getElementById("ticketNum").innerHTML = "Tickets: " + numberOfPeople;
document.getElementById("ticketCost").innerHTML = "Cost: $" + ticketCost;
document.getElementById("ttCost").innerHTML = "Total: $" + totalCost;

// Shopping Section
const initialFunds = 235.87;
let jacket = 70;
let sweater = 55;
let shirt = 35;
let pants = 75;
let skirt = 49;
let sandals = 30;
let shoes = 60;

// Calculate total cost of items without jacket
var totalCost = shirt + pants + shoes;
var remainingFunds = initialFunds - totalCost;

// Display remaining funds
document.getElementById("bank").innerHTML = "Remaining Funds: $" + remainingFunds;

// Determine if there are enough funds to add the jacket
var canAddJacket = remainingFunds >= jacket;
document.getElementById("addJacket").innerHTML = "Can add jacket: " + canAddJacket;

// Pizza Section
var pizzas = 4;
var slicesPerPizza = 8;
var slicesPerStudent = 2.5;

// Calculate total slices and how many students can be fed
var totalSlices = pizzas * slicesPerPizza;
var numberOfStudents = totalSlices / slicesPerStudent;
var leftoverSlices = totalSlices % slicesPerStudent;

// Display results
// The "\n" is used for a new line!!!!
document.getElementById('profPizza').innerHTML = 
    "Number of students that can be fed: " + numberOfStudents + "\n"  +
    "Leftover slices: " + leftoverSlices;

// Monty's Mega Bar Section
var adultBuffetPrice = 12;
var childBuffetPrice = 6;
var drinkPrice = 1.50;

var numAdultBuffets = 2;
var numChildBuffets = 1;
var numDrinks = 3;

var totalAdultBuffets = numAdultBuffets * adultBuffetPrice;
var totalChildBuffets = numChildBuffets * childBuffetPrice;
var totalDrinks = numDrinks * drinkPrice;

var totalPrice = totalAdultBuffets + totalChildBuffets + totalDrinks;

// Display results
document.getElementById("Monty").innerHTML = "Total Price: $" + totalPrice;

// Average Earned Tips Section
var week1 = 202.45;
var week2 = 134.97;
var week3 = 256.63;
var week4 = 178.22;
var totalWeeks = 4;

var totalTips = week1 + week2 + week3 + week4;
var averageTips = totalTips / totalWeeks;

// Display results
document.getElementById("tips").innerHTML = "Average Weekly Tips: $" + averageTips;
