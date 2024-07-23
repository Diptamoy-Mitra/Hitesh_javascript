//object literals
//collections of properties and methods
const user = {
    username: "hitesh",
    loginCount: 8,
    signIn: true,
    getUserDetails: function () {
        console.log(`Got user details:---- Username: ${this.username}`)
        // console.log(this) 
        /*
            {
                username: 'hitesh',
                loginCount: 8,
                signIn: true,
                getUserDetails: [Function: getUserDetails]
            }
         
        */
    }
}

// console.log(user.username) //hitesh
// console.log(user.getUserDetails()) //Got user details:---- Username: hitesh
// console.log(this) // []  //node enviroment e global context e  this is empty values always, but chrome e this value returns window object


//constractor 
//new keyword is constructor function
// const promiseOne=new Promise();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;

}
// const userOne = User('hitesh', 12, true);
const userOne =new User('hitesh', 12, true);
console.log(userOne)//User { username: 'hitesh', loginCount: 12, isLoggedIn: true }

// const userTwo =  User('chaiAurcode', 11, false) //value overwrite hoi jabe userOne er sthe, so its create problems, so we use new keyword for create new object or instance

const userTwo = new User('chaiAurcode', 11, false)
console.log(userTwo) //User { username: 'chaiAurcode', loginCount: 11, isLoggedIn: false }
console.log(userTwo.constructor)//[Function: User] //function referece

