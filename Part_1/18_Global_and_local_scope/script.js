//Global_and_local_scope
let a = 10
const b = 20
var c = 30
console.log(a) //10
console.log(b) //20
console.log(c) //30

// let d=89  //we can declare here also 
if (true) {
  let d = 10
  const e = 20
  var f = 30
  console.log("Inner: ", d) //Inner:  10
}

// console.log(d) //d is not defined  //block scope
// console.log(e) //e is not defined //block scope
console.log(f) //30 //because its global scope   

