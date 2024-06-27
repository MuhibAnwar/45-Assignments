//TASK 28


let humanage:number = 66;

if(humanage < 2){
    console.log(`the person is a baby.`);
    
}
else if(humanage >= 2 && humanage < 4){
    console.log(`the person is a toddler.`);

}
else if(humanage >= 4 && humanage < 13){
    console.log(`the person is a Kid.`);

}
else if(humanage >= 13 && humanage < 20){
    console.log(`the person is a Teenager.`);

}
else if(humanage >= 20 && humanage < 65){
    console.log(`the person is a Adult.`);

}
else { 
    console.log(`the person is a Elder.`);

}

//TASK 29
let favoritefruit : string[]=[`apple`,`banana`,`mango`,'orange']

if (favoritefruit[0] == (`apple`))
    console.log(`you like apple`);
else (console.log(`you don't like apple`))

if (favoritefruit[1] == (`banana`))
    console.log(`you like banana`);
else (console.log(`you don't like banana`)) 

if (favoritefruit[2] == (`mango`))
    console.log(`you like mango`);  
else (console.log(`you don't like mango`))      

if (favoritefruit[3] == (`orange`)) 
    console.log(`you like orange`);
else (console.log(`you don't like orange`))


//TASK 30


let names:string[] =['admin','munsif','maazin','anas','saad'];

names.forEach(function(username) {
    if(username == 'admin'){
        console.log(`Hello admin, would you like to see a status report?
        `);
        
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    
    }
})

//TASK 31

let username:string[] =['admin','farhan','gulzar','faheem','zafar'];
names =['admin']
if(names.length > 0){
    names.forEach(function(username){
    if(username == 'admin'){
        console.log(`Hello admin, would you like to see a status report?
        `);
        
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    
    }
});
}
else{
    console.log(`We need to find some users!`);
    
}

//TASK 32
let old_users: string[] = ['ali', 'zohaib', 'sana']

let new_user: string[] = ['sana', 'ali', 'farhan', 'taha']

for (let i = 0; i < new_user.length; i++) {

    let newUserLower = new_user[i].toLowerCase();
    let usernameTaken = false

    for (let a = 0; a < old_users.length; a++) {
        let activeUsersLower = old_users[a].toLowerCase()

        if (newUserLower === activeUsersLower) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(`Sorry, the username '${new_user[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user[i]}' is available.`);
    }
}

//TASK 33
let num:Number[] = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < num.length; i++) {
 let endTag ;
 let count = num[i]
 if(count == 1){
    endTag = 'st'
 }
 else if(count == 2){
    endTag = 'nd'
 }
 else if(count == 3){
    endTag = 'rd'
 }
    else{
        endTag = 'th'
    }

    console.log(count+endTag);
    
}


//TASK 34
let pizza : string[]= ["cheese","peperoni","mushroom",]
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}   
for (let i = 0; i < pizza.length; i++) {   
    console.log(`I really love ${pizza[i]} pizza`);

}   
let endline =" /n i like all these pizza flavors"
console.log(endline)

//TASK 35
let animals : string []= ["dog","cat","fish"]
for (let i = 0; i < animals.length; i++) { 
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet.`)


//TASK 36
let Tshirts = function(size:string,text:string){
    console.log((`A ${size} shirt will be printed with the message: ${text}.`)
    )
} 
Tshirts ('small','cricket')

