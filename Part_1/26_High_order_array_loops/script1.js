//for in loops
const myObj={
  js: 'javascript',
  cpp: 'C++',
  rb:'Ruby',
  swift:'Swift by Apple'
}
//iterate object
for (const key in myObj) {
  console.log(key)
}
//output 
/* 
  js
  cpp
  rb
  swift
*/
for (const key in myObj) {
  console.log(myObj[key]) //javascript C++ Ruby  Swift by Apple
}
//apply for in loop on array
const programming=["js","rb","py","java"]
for (const key in programming) {
    console.log(key) //0 1 2 3 
    console.log(programming[key]) //js rb py java
}

//example on map
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// for (const key in map) {  //this map not iterable ,so not output are shown
//   console.log(key)
// }

//for each loop
console.log("FOR EACH LOOP")
const coding=["js","ruby","python","java", "cpp"]
coding.forEach( function (item){
  console.log(item) //js ruby python java cpp
})

//for each loop and arrow function combine
coding.forEach((i)=>{
  console.log(i) //js ruby python java cpp
})

//example
coding.forEach((item,index,arr)=>{
  console.log(item,index,arr)
})
//output
/* 
  js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
  ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
  python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
  java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
  cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
*/

//