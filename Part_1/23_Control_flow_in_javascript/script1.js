//switch case
const month = 3
switch (month) {
  case 1:
    console.log("january")
    break;
  case 2:
    console.log("february")
    break;
  case 3:
    console.log("march") //march 
    break;
  case 4:
    console.log("April")
    break;
  default:
    console.log("default case match")
    break;
}

//truthy value and falsy value

const userEmail="h@hitesh.ai" //truthy value
if(userEmail){
  console.log("Got user email")
}
else{
  console.log("Don't have user email")
}

const userEmail1="" //falsy value
if(userEmail1){
  console.log("Got user email") //Got user email
}
else{
  console.log("Don't have user email") //Don't have user email
}

//falsy values---> false, 0, -0, BigInt 0n, "", null,undefined,NaN
//truthy values--> true,"0",'false'," ",[],{},function(){}, rest the others except falsy values
const userEmail2=[]
if(userEmail2.length===0){
  console.log("array is empty") //array is empty
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
  console.log("Object is empty") //Object is empty
}

//Nullish coalescing Operator(??):null undefined
let val1
val1=5 ?? 10
console.log(val1) //5

let val2
val2=null ?? 10
console.log(val2) //10

let val3
val3=undefined ?? 34
console.log(val3) //34

//ternary operator
//condition? true:false
const iceTeaPrice=100
iceTeaPrice>=80? console.log("more than 80") : console.log("less than 80") //more than 80