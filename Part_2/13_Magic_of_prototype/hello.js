//in js function also as an object.

function multiplyByFive(num) {
   return num * 5;
}

// const res=multiplyByFive(5)
multiplyByFive.power = 2
console.log(multiplyByFive(5)) //25
console.log(multiplyByFive.power) //2
console.log(multiplyByFive.prototype) //{}

//understand new keyword deeply 
function createUser(username, score) {
   //by default context set for this function prototype
   this.username = username;
   this.score = score; 

}
createUser.prototype.increment=function(){
   this.score++;
}
createUser.prototype.printMe=function(){
   console.log(`Username is ${this.username} and score is ${this.score}`)
}

// const chai=createUser('chai',10)
// const tea=createUser('tea',20)
// chai.printMe() //TypeError: Cannot read properties of undefined (reading 'printMe')

const chai=new createUser('chai',10)
chai.printMe() //Username is chai and score is 10


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

