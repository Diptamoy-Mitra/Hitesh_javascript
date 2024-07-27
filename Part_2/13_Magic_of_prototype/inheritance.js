//Inheritance 
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport, //prototypal inheritance
}
Teacher.__proto__ = User  //prototypal inheritance


//Modern syntax 
Object.setPrototypeOf(TeachingSupport, Teacher)//access property of Teacher to TeachingSupport 


//solve the problem  solution
let anotherUserName = "chaiAurCodeee       "
String.prototype.trueLength = function () {
    //console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength(); //True length is: 11

"hitesh".trueLength();
"IceTea".trueLength();  //True length is : 6

