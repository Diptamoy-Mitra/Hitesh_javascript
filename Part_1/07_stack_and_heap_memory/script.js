// Memory Types 

// 1.Stack   2.Heap

// 1. premetive types datatypes use  Stack
// 2. non-premetive types datatypes use  Heap


//stack 
let myYoutubename="Hiteshchoudharydotcom"
let anothername=myYoutubename;
console.log(anothername) //Hiteshchoudharydotcom
//now change the value in another name
anothername="chaiaurcode" 
console.log(anothername) //chaiaurcode
console.log(myYoutubename) //Hiteshchoudharydotcom

let userOne={
  email:"mitradiptamoy@gmail.com",
  upi:"user@ybl"
}
let userTwo=userOne; //its take reference of userOne, if change the value of userTwo then also change vlaue of userOne
userTwo.email="hitesh@gmail.com" //change the value
console.log(userOne.email) //hitesh@gmail.com
console.log(userTwo.email) //hitesh@gmail.com