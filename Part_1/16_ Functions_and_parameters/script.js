//Functions_and_parameters

//normal syntax
function sayMyName() {
  console.log("Hi")
  console.log("Hitesh")
}
//execute
sayMyName()  //reference of that function

//another example
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2)
}
//execute
addTwoNumbers() //NaN
addTwoNumbers(3, 4) //7
addTwoNumbers(5, "4") //54
addTwoNumbers(3, "a") //3a

//return undefined
const result = addTwoNumbers(3, 4)
console.log("Result: ", result) //Result:  undefined

//another examples
function addTwoNumber(number1, number2) {
  let r = number1 + number2;
  return r;
}
const r = addTwoNumber(3, 4)
console.log("Result: ", r) //Result:  7

//another examples
function loginUserMessage(username){
  return `${username} just logged In`;
}
console.log(loginUserMessage("Diptamoy")) //Diptamoy just logged In
console.log(loginUserMessage()) //undefined just logged In