//19_Scope_level_and_mini_hoisting

function one(){
  const username="hitesh"
  function two(){
    //two can access all variables of one()
      const website="youtube"
      console.log(username) //hitesh
  }
  // console.log(website) //ReferenceError: website is not defined

  //call two()
  two()
}
//call one()
one()

//another example
if(true){
  const username="hitesh"
  if(username==="hitesh"){
    const website=" youtube"
    console.log(username + website) //hitesh youtube
  }
  // console.log(website) //ReferenceError: website is not defined
}
// console.log(username) //ReferenceError: username is not defined

//********* interesting example *************** */
// console.log(addone(5)) //6
function addone(num){
  return num+1
}
// console.log(addone(5)) //6



// console.log(addTwo(2)) //ReferenceError: Cannot access 'addTwo' before initialization //hoisting
const addTwo=function(num){ //declare with hold that function
  return num+2;
}
// console.log(addTwo(2)) //4