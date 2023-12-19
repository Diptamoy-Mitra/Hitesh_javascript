//functions_with_objects

//rest operator //return as array
function calculateCartPrice(...num1)
{ 
   return num1;
}
console.log( calculateCartPrice(2,3,4,5)); //[ 2, 3, 4, 5 ]

//Objects pass
const user={
  username: "hitesh",
  price: 109,
}
function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`) //Username is hitesh and price is 109
}
handleObject(user)

//array pass
const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
   return getArray[3];
}
console.log(returnSecondValue(myNewArray)) //500





