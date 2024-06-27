//TASK 10
//COMPLELTED
//TASK 11
var bestfriends = ["ahmed", "waji", "haidar", "noor"];
console.log(bestfriends[0]);
console.log(bestfriends[1]);
console.log(bestfriends[2]);
console.log(bestfriends[3]);
//TASK 12
console.log("PLEASE COMPLETE YOU HOMEWORK" + bestfriends[0]);
console.log("PLEASE COMPLETE YOU HOMEWORK" + bestfriends[1]);
console.log("PLEASE COMPLETE YOU HOMEWORK" + bestfriends[2]);
console.log("PLEASE COMPLETE YOU HOMEWORK" + bestfriends[3]);
//TASK 13
var transportation = ["MotorCycle", "Car", "Cycle", "PrivateJet"];
console.log("I would like to own a Honda", transportation[0]);
console.log("I would like to own a ROLLS ROYCE", transportation[1]);
console.log("I would like to own a Thunder", transportation[2]);
console.log("I would like to own a ROLLS ROYCE", transportation[3]);
//TASK 14
var friends = ["ahmed", "waji", "haidar",];
console.log(friends[0] + "you are invited to dinner");
console.log(friends[1] + "you are invited to dinner");
console.log(friends[2] + "you are invited to dinner");
//TASK 15
var guestList = ["Tayyab", "Imran", "Taha"];
//  invitation messages
console.log("Dear " + guestList[0] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[1] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[2] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
// the who cn't make it with  dinner.
console.log("Mr " + guestList[1] + " Can't come  in dinner because of Strike.");
// replace the name width cannot come in dinner
guestList[1] = "Abdullah";
console.log("\nInvitations for the updated guest list:");
console.log("Dear " + guestList[0] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[1] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
console.log("Dear " + guestList[2] + ", you are cordially invited to dinner this sunday. We would be honored to have your presence.");
//TASK 16
var guestLists = ["tayyab", "imran", "taha"];
console.log("Everyone I am very Happy to informig You I have  found a bigger dinner table. so Iam inviting More Friends");
// now add one more friend in end of array so we use .push() method
guestLists.push("Saba");
// now we add one more friend in start of array for use of  .unshift()
guestLists.unshift("Emman");
//.splice add a thing in middle of array it takes 3 values 1st is index which to start 2nd to delete thing if 2nd is 0 then it cannot delete any thing 3rd the value u adding. simple.
guestLists.splice(2, 0, "Ahmed");
for (var i = 0; i < guestLists.length; i++) {
    console.log("Dear ".concat(guestLists[i], "  you are cordially invited to dinner this sunday. We would be honored to have your presence."));
}
//TASK 17
var guestlist1 = ["Emman", "Tayyab", "Imran", "Abdullah", "Taha", "Saba"];
console.log("Table won't arrived in time that's why I can invite only two people for dinner\n");
var guest1 = guestlist.pop();
console.log("Sorry Mr ".concat(guest1, " you are not invited!"));
var guest2 = guestlist.pop();
console.log("Sorry Mr ".concat(guest2, " you are not invited!"));
var guest3 = guestlist.pop();
console.log("Sorry Mr ".concat(guest3, " you are not invited!"));
var guest4 = guestlist.pop();
console.log("Sorry Mr ".concat(guest4, " you are not invited!"));
for (var i = 0; i < guestlist.length; i++)
    (console.log("Mr. ".concat(guestlist[i], " you are still invited")));
guestlist.pop();
guestlist.pop();
console.log(guestlist);
//TASK 18
var favplaces = ["makkah", "qatar", "saudi arabia", "egypt", "Astore"];
console.log("I would love to visit ".concat(favplaces[0], ", ").concat(favplaces[1], " and ").concat(favplaces[2], ", ").concat(favplaces[3], ", ").concat(favplaces[4]));
var copyArr = favplaces.slice();
var sortedArr = copyArr.slice();
var sortedArrAns = copyArr.sort().join(", ");
console.log("I would love to visit ".concat(sortedArrAns));
console.log("orginal " + favplaces);
var reverse = favplaces.reverse();
console.log(reverse);
var againreverse = favplaces.reverse();
console.log(againreverse);
console.log(favplaces);
var sorting = favplaces.sort();
console.log(sorting);
var reversesorting = favplaces.reverse();
console.log(reversesorting);
