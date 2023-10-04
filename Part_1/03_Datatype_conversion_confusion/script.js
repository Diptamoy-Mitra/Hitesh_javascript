let score = 33;
console.log(typeof score); //number 

score = "33";
console.log(typeof score) //string
//string to number conversion
let valueInNumber = Number(score)
console.log(typeof valueInNumber) //number

//Conversions 

//NAN (Not a Number)
score = "33abc"
valueInNumber = Number(score)
console.log(valueInNumber) //NaN
console.log(typeof valueInNumber) //number

score = null;
valueInNumber = Number(score)
console.log(valueInNumber) // 0

score = undefined;
valueInNumber = Number(score)
console.log(valueInNumber) //NaN

score=true;
valueInNumber = Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //1

//conversions number to booleans
let isLoggedIn=1;
let boolLoggedIn=Boolean(isLoggedIn);
console.log(boolLoggedIn) //true 

isLoggedIn=0;
boolLoggedIn=Boolean(isLoggedIn);
console.log(boolLoggedIn) //false

isLoggedIn="";
boolLoggedIn=Boolean(isLoggedIn);
console.log(boolLoggedIn) //false

isLoggedIn="Hitesh";
boolLoggedIn=Boolean(isLoggedIn);
console.log(boolLoggedIn) //true

//conversions Number to String
let setNumber=33;
let stringNumber=String(setNumber);
console.log(typeof stringNumber) //string
console.log(stringNumber) //33






