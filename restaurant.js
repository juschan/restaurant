var d = new Date();
var time = d.getHours();

var name = prompt("What is your name?");
var greetings = ["Good Morning ", "Good Afternoon ", "Hello ", "G'day mate ", "Welcome "];
var randomNumber = Math.floor(Math.random()*greetings.length);
console.log(greetings[randomNumber] + name + "!");

var tableFor = prompt("Table for how many?");
var reservation = prompt("Do you have a reservation?").toLowerCase();
var tableResponse = ['Hmmm...', 'Dining alone...', 'Table for Two!', "Three's a Company", "Private room for four or more!"];


if ( reservation === "yes") {
	console.log("Yes, " + name + "! Your table has been prepared!");
	console.log(tableResponse[Math.min(tableFor, 4)]);
} else if (((time>12 && time<14) || (time>18 && time<20)) && reservation === "no") {
	console.log("Sorry, its peak hour. No table without reservations!");
} else {
	console.log(tableResponse[Math.min(tableFor, 4)]);
	console.log("This way please!");
}


var mains=[];
var dessert=[];
for (var i=0; i<tableFor; i++) {
	mains.push(prompt("For Guest " + (i+1) + ", what mains do you want?"));
	dessert.push(prompt("For Guest " + (i+1) + ", what dessert do you want?"));
}
console.log("You have ordered the following main dishes: " + mains.join(", ") + ".");
console.log("You have ordered the following desserts: " + dessert.join(", ") + ".");

var foodBill = mains.join("").length + dessert.join("").length;
console.log("Your food bill is: $" + foodBill);

var tip = 0.1*foodBill;
console.log("Your total bill including tips is: $" + (foodBill + tip));

var paymentMode = prompt("Would that be cash or credit?");
console.log("You are paying by: " + paymentMode);
