/*************Datatypes************/ 
// PREMETIVE DATATYPES
// 7 categories 
// string , Number , Boolean , null , undefined , Symbol , BigInt

const score=100 //Number
const isLoggedIn=true; //Boolean
const outsideTemp=null //Null(No value)
let useEmail //undefined(no assign any value)

const id=Symbol('123') //symbol(it represents unique representation)
const id1=Symbol('123'); 
console.log((id===id1)) // false (so id1 and id are different, represent both unique id)

const bigNumber=214762734672427427; //BigInt


//NON-PREMETIVE DATATYPES(Reference Type)
//Arrays, Objects, Functions 

const  heros=["shaktiman", "nagraj", "doga"]; //array

const myObj={
  name:"Hitesh",
  age:45
}  //Object

const myFunc=function(){    //function
  console.log('Hello World!')
}
myFunc(); //Hello World! 





