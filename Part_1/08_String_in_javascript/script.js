const name="Hitesh " 
const repoCount=50;
console.log(name+repoCount+" value") //Hitesh 50 value

//using backticks
console.log(`Hello my name is ${name} and  my repo count is ${repoCount}`) //Hello my name is Hitesh  and  my repo count is 50

//Another method to define strings 
const gameName=new String('Hitesh');
console.log(gameName) //[String: 'Hitesh']
console.log(gameName[3]) //e
console.log(gameName.__proto__) // {}
console.log(gameName.length) //6
console.log(gameName.toUpperCase()) //HITESH  //don't change original string
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')) //2   

//substring
const gameName1=new String('Hitesh-hc');
const newString=gameName.substring(0,4);
console.log(newString) //Hite 

//slice method
console.log(gameName1.slice(-8,4)) //ite
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -2);
console.log(myBest) // [ 'Lemon' ]
const citrus = fruits.slice(1, 3);
console.log(citrus) //[ 'Orange', 'Lemon' ]

//trim (remove starting and end spaces)
const newStringOne="   hitesh  "
console.log(newStringOne.trim()) //hitesh

//replace (replace word)
const url="https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-');
console.log(url.replace('%20','-')) // https://hitesh.com/hitesh-choudhary 

//includes
console.log(url.includes('http')) //true

//string to array using split method
const gameName2='hitesh-hc-name-hi'
console.log(gameName2.split('-')) //[ 'hitesh', 'hc', 'name', 'hi' ]

//concat methods
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3) //Hello World