//TASK 19

let guestlist: string[] = [`Wajahat` , `Tashif` , `Andrew` , `Vladmir` , `Putin`]
console.log (`i am inviting ${guestlist.length} people at my dinner which are following\n`);

for(let i=0;i<guestlist.length;i++){
  console.log( `${i+1}. ${guestlist[i]}`); 
}

//TASK 20
let countries : string[]= ["PAKISTAN","INDIA","CHINA","USA","FRANCE"]

for (let i=0;i<countries.length;i++)
  console.log(countries[i]);

//TASK 21
 let playerdetail ={
    name :"ALISTER",
    age : 23,
    country : "PAKISTAN",
    team : "NAZIMABAD "

}
console.log(playerdetail)

//TASK 22

let Person: string[] = [`Wajahat` , `Andrew` , `Adolf` , `Putin` , `Trump`]
console.log (Person[0]);
console.log (Person[3]);
console.log (Person[2]);


//TASK 23
//1
let booleanum ="0,1"

console.log (booleanum=='0,1');
console.log (booleanum=='1,0');
//2
let constant = "k"

console.log (constant=='k');
console.log (constant=='A');

//3
let newton = "physican"
console.log(newton=='physican');
console.log(newton=='physicist');

//4
let enistein =  "scientist"
console.log(enistein=='scientist');
console.log(enistein=='physicist');

//5
let apple = "fruit"
console.log(apple=='fruit');
console.log(apple=='apple');

//6
let cricket = "game"
console.log(cricket=='game');
console.log(cricket=='emotion');

//7
let water = "liquid"
console.log(water=='liquid');
console.log(water=='liquid');
//8
let milk = "dairy"
console.log(milk=='dairy');
console.log(milk=='diary');

//9
let mercedes = "car"
console.log(mercedes=='car');
console.log(mercedes=='vehicle');  

//10
let london = "capital"
console.log(london=='capital');
console.log(london=='capital');

//TASK 24

let myCountry = (`Pakistan`);
console.log (myCountry == `Pakistan`)                  
console.log (myCountry !== `pakistan`);                 

// // Numeric Tests
let number = 15                                         
console.log (number == 15);                             
console.log (number !== 15);                            
console.log (number > 10);                              
console.log (number < 10);                             
console.log (number >= 10);                             
console.log (number <= 10);                       

// using `and` and `or` operators
let num1 = 10
let num2 = 5

console.log (num1 < 15 && num2 > 10 );                 
console.log (num1 < 15 || num2 > 9 );

// Array or not in a Array 
let array = [15 , 10 , `Wajahat`];
let string = (`Hussain`);

console.log (Array.isArray(array));
console.log (Array.isArray(string));

//TASK 25
let alien = "green"
if (alien == `green`){
  console.log(`you just earned 5 points`);
}else{
  console.log(`you just earned 10 points`);
}

//TASK 26


let AlienColor = `Black`

if(AlienColor == `Black`){
    console.log (`Player just earned 5 points`)
}else{
    console.log (`Player just earned 10 points`)
}

if(AlienColor == `White`){
    console.log (`Player just earned 5 points`)
}

//TASK 27


let AlienColor1 = `Black`

if(AlienColor == `Black`){
    console.log (`Player earned 5 points`)
}else if(AlienColor == `Pink`){
    console.log (`Player earned 10 points`)
}else if(AlienColor == `Orange`){
    console.log (`Player earned 15 points`)
}

AlienColor = `yellow`

if(AlienColor == `Green`){
    console.log (`Player earned 5 points`)
}else if(AlienColor == `Crimsan Red`){
    console.log (`Player earned 10 points`)
}else if(AlienColor == `Pale Yellow`){
    console.log (`Player earned 15 points`)
}

AlienColor = `blue`

if(AlienColor == `Black`){
    console.log (`Player earned 5 points`)
}else if(AlienColor == ` Plae Yellow`){
    console.log (`Player earned 10 points`)
}else if(AlienColor == `Crimsan Red`){
    console.log (`Player earned 15 points`)
}


