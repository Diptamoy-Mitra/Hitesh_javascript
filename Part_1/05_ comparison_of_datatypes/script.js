/********Comparision of datatypes***********/

console.log(2>1)  //true
console.log(2>=1) //true
console.log(2<1) //false
console.log(2!=1) //true
console.log(2==1) //false

console.log("2">1) // true
console.log("02">1) // true

//comparision with null
console.log(null>0) //false
console.log(null<0) //false
console.log(null==0) //false //but here also null makes 0, but faces problem
console.log(null>=0) //true //comparision convert null to a number, trating it as 0

//comparision with undefined 
console.log(undefined==0) //false
console.log(undefined<0)  //false
console.log(undefined>0)  //false

//strictly checking ('===')
console.log("2"===2) //false //checks also datatypes

//we always avoid this types of inconsistancy converions




