// arrays 

const myArr=[0,1,2,3,4,5, true]

console.log(myArr[0]) //0
console.log(myArr[2]) //2

//shallow copy //same reference point share in array
//Deep copy //properties do not share same reference 

//various process of creating arrays
const myHeros=["shaktiman","nagraj"]
const myArray2=new Array(1,2,3,4)
console.log(myArray2) //[ 1, 2, 3, 4 ]

//methods
myArray2.push(5);
console.log(myArray2) // [ 1, 2, 3, 4, 5 ]
myArray2.pop();
console.log(myArray2) //[ 1, 2, 3, 4 ]

myArray2.unshift(9) //insert at top of array
console.log(myArray2) //[ 9, 1, 2, 3, 4 ]
myArray2.shift()  //shift left
console.log(myArray2) //[ 1, 2, 3, 4 ]  

//includes
console.log(myArr.includes(9))//false
//index
console.log(myArr.indexOf(8)) //-1 //not exists
console.log(myArr.indexOf(3)) //3  //exists

//join
const newArr=myArr.join()

console.log(typeof myArr)  //object
console.log(typeof newArr) //string

//slice
console.log(myArr) //[ 0, 1, 2,    3, 4, 5, true]
console.log("A ",myArr)          //  A  [
                                 //       0, 1, 2,    3,
                                 //       4, 5, true
                                  //    ]

const myn1=myArr.slice(1,3)
console.log(myn1) //[ 1, 2 ]
console.log("B ",myArr)

//splice //change original array
const myn2=myArr.splice(1,3)
console.log("c ",myArr) //c  [ 0, 4, 5, true ]
console.log(myn2) //[ 1, 2, 3 ]


