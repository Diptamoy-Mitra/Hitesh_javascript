console.log("Hitesh")

//const doesn;t change, its lock its value, never reinitialized its value
const accountId=144553; 

//Let is local scope
let accountEmail="hitesh@google.com";

//var is global scope , its issues on bloack scope and functional scope
var accountPassword="1234";

//without declare variable type, we can also do this
accountCity="Jaipur";


let accountState;
//console.log(accountState) //undefined





//analysis
console.log(accountId) //144553

// accountId=2
// console.log(accountId)  //TypeError: Assignment to constant variable.

accountEmail="hc@gmail.com"
accountPassword="21212121"
accountCity="kolkata"
console.log([accountId,accountEmail,accountPassword,accountCity]) //[ 144553, 'hc@gmail.com', '21212121', 'kolkata' ]






