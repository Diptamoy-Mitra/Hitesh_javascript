//23_Control_flow_in_javascript 


//If  conditional

// if(true){ } //execute code

// if(false){ }//not execute code

const isUserloggedIn=true
const temparature=41
if(2=="2"){
  console.log("executed") //print "executed" because "==" not check datatypes, only check values
}
// conditions--> >,<,<=,>=, ==, !=

//strict checking
if(2==="2"){
  console.log("executed") //not print
}
//example of if
if(temparature<50){
  console.log("temparature less than 50") //temparature less than 50
}
else{
  console.log("not less than 50") 
}

//example 
const score=200
if(score>100){
  const power="fly"
  console.log(`User power: ${power}`) //User power: fly
}
// console.log(`User power: ${power}`) //faced error //ReferenceError: power is not defined

//shorthand notation
// const balance=100
// if(balance<500)  console.log("test1"),console.log("test2") //test1 text2

//nested If
// const balance=1200
// if(balance<500){
//   console.log("less than 500")
// }
// else if(balance<750){
//   console.log("less than 750")
// }
// else if(balance<950){
//   console.log("less than 950")
// }
// else{
//   console.log("price 1200") //price 1200
// }

//another example
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
  console.log("Allow to buy courses"); //Allow to buy courses
}
if(loggedInFromEmail || loggedInFromGoogle){
  console.log("user logged in"); //user logged in
}


