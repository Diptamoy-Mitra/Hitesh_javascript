// 20_this_and_arrow_function
//this keywords tells about/access current contexts

//arrow functions
const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},  welcome to website`)
    console.log(this)
    /* 
      {
        username: 'sam',
         price: 999,
         welcomeMessage: [Function: welcomeMessage]
       }
    
    */
  }
}
// user.welcomeMessage() //hitesh,  welcome to website
// user.username = "sam"
// user.welcomeMessage() //sam,  welcome to website
// console.log(this) //{}


//example of this within an function
function chai(){
  let username="hitesh"
  console.log(this) //Object [global]........onek
  console.log(this.username) //undefined //won't work on function this 
}
chai()

//arrow functions
const tea=function(){
  let username="dipatmoy"
  console.log(this.username) //undefined //won't work on function this 
}
tea()

//now define arrow functions here
const tea1=()=>{
  let username="dipatmoy"
  console.log(this) //{}
  console.log(this.username) //undefined
}
tea1()

//pure arrow functions
// const addTwo=(num1,num2)=>{
//   return num1+num2;  //explicit return
// }
// console.log(addTwo(2,3)) //5



//another example of arrow function for one line statesment
const addTwo=(num1,num2)=> num1+num2;  //implicit return 
console.log(addTwo(2,3)) //5

//another example of arrow function for one line statesment for objects
const addTwo1=(num1,num2)=> ({username:"dipto"});  //need to wrap into ()
console.log(addTwo1(2,3))  //{ username: 'dipto' }


//example 
const myArray=[2,3,4,5,6]
myArray.forEach((x)=>{
  console.log(x) //2 3 4 5 6
})