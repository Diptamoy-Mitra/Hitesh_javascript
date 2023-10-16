// singleton  //build from constructors // Object.create()
// Object literals //build from literals //const jUser={}


const mySym=Symbol("key1")
const jUser={
  name: "Hitesh",
  "full name":"Hitesh chowdhury",
  age: 1,
  location:"Jaipur",
  email:"hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"],
  [mySym]: "myKey1"
}
console.log(jUser.email) //hitesh@google.com
console.log(jUser["location"]) // Jaipur
console.log(jUser["full name"]) // Hitesh chowdhury
//console.log(jUser.mySym) // myKey1   //if we define as  mySym: "myKey1" //key defines as string
//console.log(typeof jUser.mySym) //string  if we define as  mySym: "myKey1" 
//but we can treat as Symbol 
console.log(jUser[mySym]) //myKey1


console.log(jUser)  
/* 
  {
  name: 'Hitesh',
  'full name': 'Hitesh chowdhury',        
  age: 1,
  location: 'Jaipur',
  email: 'hitesh@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/


//change value
jUser.email="dipto@gmail.com"
console.log(jUser.email) //dipto@gmail.com

//freeze //this method enable object freeze(no updates occur)
//Object.freeze(jUser)
jUser.email="aiii@gmail.com"
console.log(jUser.email) // dipto@gmail.com //no changes

jUser.greeting=function(){
console.log("Hello js user")
}

console.log(jUser.greeting) // [Function (anonymous)]
console.log(jUser.greeting()) //Hello js user


jUser.greetingTwo=function(){
  console.log(`Hello js user ${this.name}`)

}
console.log(jUser.greetingTwo()) // Hello js user Hitesh





