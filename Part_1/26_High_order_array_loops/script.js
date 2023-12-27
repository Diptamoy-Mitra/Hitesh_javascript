//26_High_order_array_loops 

//for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  console.log(num) //1 2 3 4 5
}
//another example
const greetings = "Hello World!"
for (const greet of greetings) {
  console.log(`Each char is : ${greet}`)
}
//output
/* 
Each char is : H
Each char is : e
Each char is : l
Each char is : l
Each char is : o
Each char is :  
Each char is : W
Each char is : o
Each char is : r
Each char is : l
Each char is : d
Each char is : !
*/

//Maps -> its an object holds key-value pairs and remembers the original insertion order, unique value store`1
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map)
//output
/* 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/
for (const key of map) {
  console.log(key)
}
//output
/* 
    [ 'IN', 'India' ]
    [ 'USA', 'United States of America' ]
    [ 'Fr', 'France' ]
*/
//destructure the map
for (const [key,value] of map) {
  console.log(key, ' -> ',value)
  
}
//output
/* 
IN  ->  India
USA  ->  United States of America
Fr  ->  France
*/

//for of loop on objects
const myObj={
  'game1': 'NFS',
  'game2':'FIFA',
}
// for (const [key,value] of myObj){
//   console.log(key, ' -> ',value)  //TypeError: myObj is not iterable
// }

//using for in loop we can iterate
  
