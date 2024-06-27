//TASK 28
var humanage = 66;
if (humanage < 2) {
    console.log("the person is a baby.");
}
else if (humanage >= 2 && humanage < 4) {
    console.log("the person is a toddler.");
}
else if (humanage >= 4 && humanage < 13) {
    console.log("the person is a Kid.");
}
else if (humanage >= 13 && humanage < 20) {
    console.log("the person is a Teenager.");
}
else if (humanage >= 20 && humanage < 65) {
    console.log("the person is a Adult.");
}
else {
    console.log("the person is a Elder.");
}
//TASK 29
var favoritefruit = ["apple", "banana", "mango", 'orange'];
if (favoritefruit[0] == ("apple"))
    console.log("you like apple");
else
    (console.log("you don't like apple"));
if (favoritefruit[1] == ("banana"))
    console.log("you like banana");
else
    (console.log("you don't like banana"));
if (favoritefruit[2] == ("mango"))
    console.log("you like mango");
else
    (console.log("you don't like mango"));
if (favoritefruit[3] == ("orange"))
    console.log("you like orange");
else
    (console.log("you don't like orange"));
//TASK 30
var names = ['admin', 'munsif', 'maazin', 'anas', 'saad'];
names.forEach(function (username) {
    if (username == 'admin') {
        console.log("Hello admin, would you like to see a status report?\n        ");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
//TASK 31
var username = ['admin', 'farhan', 'gulzar', 'faheem', 'zafar'];
names = ['admin'];
if (names.length > 0) {
    names.forEach(function (username) {
        if (username == 'admin') {
            console.log("Hello admin, would you like to see a status report?\n        ");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}
//TASK 32
var old_users = ['ali', 'zohaib', 'sana'];
var new_user = ['sana', 'ali', 'farhan', 'taha'];
for (var i = 0; i < new_user.length; i++) {
    var newUserLower = new_user[i].toLowerCase();
    var usernameTaken = false;
    for (var a = 0; a < old_users.length; a++) {
        var activeUsersLower = old_users[a].toLowerCase();
        if (newUserLower === activeUsersLower) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log("Sorry, the username '".concat(new_user[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user[i], "' is available."));
    }
}
//TASK 33
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < num.length; i++) {
    var endTag = void 0;
    var count = num[i];
    if (count == 1) {
        endTag = 'st';
    }
    else if (count == 2) {
        endTag = 'nd';
    }
    else if (count == 3) {
        endTag = 'rd';
    }
    else {
        endTag = 'th';
    }
    console.log(count + endTag);
}
//TASK 34
var pizza = ["cheese", "peperoni", "mushroom",];
for (var i = 0; i < pizza.length; i++) {
    console.log("I like ".concat(pizza[i], " pizza"));
}
for (var i = 0; i < pizza.length; i++) {
    console.log("I really love ".concat(pizza[i], " pizza"));
}
var endline = " /n i like all these pizza flavors";
console.log(endline);
//TASK 35
var animals = ["dog", "cat", "fish"];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("Any of these animals would make a great pet.");
//TASK 36
var Tshirts = function (size, text) {
    console.log(("A ".concat(size, " shirt will be printed with the message: ").concat(text, ".")));
};
Tshirts('small', 'cricket');
