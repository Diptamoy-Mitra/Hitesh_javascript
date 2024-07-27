//for understanding prototype deeply
let myName = "Hitesh     "
console.log(myName.length); //11 //its not true length, because it count space also

//
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "Hammer",
    spiderman: "sling",
    getSpidermanPower: function () {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in object`)
}
//heroPower.hitesh() //hitesh is present in  object
//myHeros.hitesh() //hitesh is present in  object

Array.prototype.Heyhitesh = function () {
    console.log(`hitesh is present in  array`)
}
myHeros.Heyhitesh() //hitesh is present in  array
heroPower.Heyhitesh()  //TypeError: heroPower.Heyhitesh is not a function //top level object doesn't access prototype of array function Heyhitesh() 

