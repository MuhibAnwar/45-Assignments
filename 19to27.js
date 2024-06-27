//TASK 19
var guestlist = ["Wajahat", "Tashif", "Andrew", "Vladmir", "Putin"];
console.log("i am inviting ".concat(guestlist.length, " people at my dinner which are following\n"));
for (var i = 0; i < guestlist.length; i++) {
    console.log("".concat(i + 1, ". ").concat(guestlist[i]));
}
//TASK 20
var countries = ["PAKISTAN", "INDIA", "CHINA", "USA", "FRANCE"];
for (var i = 0; i < countries.length; i++)
    console.log(countries[i]);
//TASK 21
var playerdetail = {
    name: "ALISTER",
    age: 23,
    country: "PAKISTAN",
    team: "NAZIMABAD "
};
console.log(playerdetail);
//TASK 22
var Person = ["Wajahat", "Andrew", "Adolf", "Putin", "Trump"];
console.log(Person[0]);
console.log(Person[3]);
console.log(Person[2]);
//TASK 23
//1
var booleanum = "0,1";
console.log(booleanum == '0,1');
console.log(booleanum == '1,0');
//2
var constant = "k";
console.log(constant == 'k');
console.log(constant == 'A');
//3
var newton = "physican";
console.log(newton == 'physican');
console.log(newton == 'physicist');
//4
var enistein = "scientist";
console.log(enistein == 'scientist');
console.log(enistein == 'physicist');
//5
var apple = "fruit";
console.log(apple == 'fruit');
console.log(apple == 'apple');
//6
var cricket = "game";
console.log(cricket == 'game');
console.log(cricket == 'emotion');
//7
var water = "liquid";
console.log(water == 'liquid');
console.log(water == 'liquid');
//8
var milk = "dairy";
console.log(milk == 'dairy');
console.log(milk == 'diary');
//9
var mercedes = "car";
console.log(mercedes == 'car');
console.log(mercedes == 'vehicle');
//10
var london = "capital";
console.log(london == 'capital');
console.log(london == 'capital');
//TASK 24
var myCountry = ("Pakistan");
console.log(myCountry == "Pakistan");
console.log(myCountry !== "pakistan");
// // Numeric Tests
var number = 15;
console.log(number == 15);
console.log(number !== 15);
console.log(number > 10);
console.log(number < 10);
console.log(number >= 10);
console.log(number <= 10);
// using `and` and `or` operators
var num1 = 10;
var num2 = 5;
console.log(num1 < 15 && num2 > 10);
console.log(num1 < 15 || num2 > 9);
// Array or not in a Array 
var array = [15, 10, "Wajahat"];
var string = ("Hussain");
console.log(Array.isArray(array));
console.log(Array.isArray(string));
//TASK 25
var alien = "green";
if (alien == "green") {
    console.log("you just earned 5 points");
}
else {
    console.log("you just earned 10 points");
}
//TASK 26
var AlienColor = "Black";
if (AlienColor == "Black") {
    console.log("Player just earned 5 points");
}
else {
    console.log("Player just earned 10 points");
}
if (AlienColor == "White") {
    console.log("Player just earned 5 points");
}
//TASK 27
var AlienColor1 = "Black";
if (AlienColor == "Black") {
    console.log("Player earned 5 points");
}
else if (AlienColor == "Pink") {
    console.log("Player earned 10 points");
}
else if (AlienColor == "Orange") {
    console.log("Player earned 15 points");
}
AlienColor = "yellow";
if (AlienColor == "Green") {
    console.log("Player earned 5 points");
}
else if (AlienColor == "Crimsan Red") {
    console.log("Player earned 10 points");
}
else if (AlienColor == "Pale Yellow") {
    console.log("Player earned 15 points");
}
AlienColor = "blue";
if (AlienColor == "Black") {
    console.log("Player earned 5 points");
}
else if (AlienColor == " Plae Yellow") {
    console.log("Player earned 10 points");
}
else if (AlienColor == "Crimsan Red") {
    console.log("Player earned 15 points");
}
