//TASK 37
function make_shirt(size='large',text:string){
    console.log("A${size} shirt will be printed with the message: ${text}.")
}
make_shirt('large','I LOVE TYPESCRIPT ')

function make_shirt1(size = 'medium', text :string) {
    console.log(`A ${size} shirt will be printed with the message: ${text}.`);
  }
  make_shirt1('medium', 'I love Typescript!');

  function make_shirt2(size = 'xl', text :string) {
    console.log(`A ${size} shirt will be printed with the message: ${text}.`);
  }         
  make_shirt2('xl', 'I love Typescript!');

  //TASK 38
  function describe_city(city:string,country='Pakistan'){
    console.log(`${city} is in ${country}`)
  } 
  describe_city('lahore')
  describe_city('karachi')
  describe_city('islamabad')

  //TASK 39
 

let city_country =(city:string,country:string)=>{
    return `${city}, ${country}`
  
  }
  console.log(city_country('Karachi','Pakistan'));
  console.log(city_country('Mumbai','India'));
  console.log(city_country('New York','USA'));


//TASK 40
interface Album {
    title: string;
    artist: string;
}
  
  function describe_album(album: Album) {
    console.log(`Album: ${album.title}`);
    console.log(`Artist: ${album.artist}`);
    
  }
  
  let album1: Album = {
    title: 'Blue Train',
    artist: 'John Coltrane',
  };
let album2: Album = {
    title: 'Open letter',
    artist: 'Talha anjum',
  };
  let album3: Album = {
    title: 'KON',
    artist: 'Talha younus',
  };
  describe_album(album1);
  describe_album(album2);
  describe_album(album3);
  

  //TASK 41
  
let NamesOfMagician = ['joker','fakri','josha'];

let show_magicians =()=> {for (let i = 0; i < NamesOfMagician.length; i++) 
  {
         console.log(NamesOfMagician[i]);
   }};

   
show_magicians();


  //TASK 42     
   let NamesOfMagician1 = ['nosh','nickel','carlos'];

let show_magicians1 =()=> {for (let i = 0; i < NamesOfMagician.length; i++) 
  {
         console.log(NamesOfMagician1[i]);
   }};


let make_great1 = ()=>{
 for (let i = 0; i < NamesOfMagician1.length; i++) {
    NamesOfMagician1[i] = `The Great ${NamesOfMagician1[i]}!`
    console.log(NamesOfMagician1[i]);
    
  }
}
console.log(`Simple Names of Magicians`);

show_magicians1();
console.log(` Names of The Great Magicians`);

make_great1()

//TASK 43
let NamesOfMagician2 = ['joker','fakri','josha'];
let copyMagicians = [...NamesOfMagician]
function show_magicians2(){for (let i = 0; i < NamesOfMagician2.length; i++) 
  {
         console.log(NamesOfMagician2[i]);
   }};


   // add  'The great' words in array.
let make_great2 = (great:string)=>{
let newArr =``;
for (let Names of  copyMagicians) {

  newArr += `${great} ${Names}\n` 
}
return newArr;
}


let greatMagicians = make_great2(`The Great`);
let MakeArr = greatMagicians.split(`\n`).filter(name => name !== '');// .filter() was see from chatgpt  its remove ''.

console.log(`Orignal Names of Magicians`);
console.log(NamesOfMagician2);


console.log(` Names of The Great Magicians`);
console.log(MakeArr);

//TASK 44
//function makesandwich(..items) {
 // console.log('Summary sandwiches')

 function makesandwich(...items){
  console.log( `        Sandwitch Summary!`);


if (items.length>0) {
  console.log('you ordered sandwich with these items'),
  items.forEach(item => console.log(item)) 
}
}
makesandwich('salad','chili');
makesandwich('chicken','salad');
makesandwich('Beef','salad');

//TASK 45



type car ={
  manufacture:string
  model:string
  [key:string]:any
}

function myCar(manufacture:string,model:string,optional:Record<string,any> ): car{
  return{
    manufacture,
    model,
    ...optional,
  }

}
let vechile:car = myCar('toyota','yaris',{color:'black',year:'2024'});
console.log(vechile);

//COMPLETED







  
  
