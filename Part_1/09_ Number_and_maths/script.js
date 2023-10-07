//NUMBER
const score=400
console.log(score) //400
const balance=new Number(100)
console.log(balance) //[Number: 100] //number type object define
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //after . take 2 values //100.00

const otherNumber=23.8966 ;
console.log(otherNumber.toPrecision(3)) //23.9

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 //indian style


console.log(Number.MAX_VALUE) //1.7976931348623157e+308
console.log(Number.MIN_VALUE) //5e-324

//MATH 
console.log(Math) //Object [Math] {} //many values comes in console like abs,PI,tan,cos etc values

console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.8)) //4 //round off to lowest value
console.log(Math.sqrt(25)) //5
console.log(Math.min(4,5,1)) //1
console.log(Math.max(3,5,2)) //5
console.log(Math.random())// always print values in b/w 0 to 1
console.log(Math.random()*10 +1) // various values but greater than 1

//random value b/w ranges
const min=10;
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //values range b/w max to min

