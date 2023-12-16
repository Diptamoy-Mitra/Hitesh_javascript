// const tinderUser=new Object()  //singleton object
const tinderUser = {}    //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "chowdhury"
    }
  }
}
console.log(regularUser.fullname) //{ userfullname: { firstname: 'Hitesh', lastname: 'chowdhury' } }
console.log(regularUser.fullname.userfullname) //{ firstname: 'Hitesh', lastname: 'chowdhury' }

//merge two objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//its not actually merge, object ki andaar object ho jaiga
const obj3 = { obj1, obj2 }
console.log(obj3) //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  

//its perfectly merge
const obj4 = Object.assign({}, obj1, obj2) // {}--> diteu pari, nau dte pari, its actually sbkotake e ek object e nbe
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//another merge method using spread operator
const obj5 = { ...obj1, ...obj2 }
console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//from database how comes data as array of objects
const users = [
  {
    id: 1,
    email: "m@gmail.com",
  },
{
  id: 2,
  email: "mm@gmail.com",
}
]
console.log(users[1].email) //mm@gmail.com

//anothers functions 
console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ] //arrays
console.log(Object.values(tinderUser)) //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true   //property availble tai true