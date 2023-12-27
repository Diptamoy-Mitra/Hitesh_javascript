//27_filter_map_and_reduce
const coding = ["js", "ruby", "python", "java", "cpp"]

// const values=coding.forEach((item)=>{ // not return anything in values
//   // console.log(item) //js ruby python java cpp
//   return item
// })
// console.log(values) //undefined


//so we need to store all elements in a variable
//filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const val = myNums.filter((num) => { //store values in val greater than 4
//   return num > 4;
// })
// console.log(val) //[ 5, 6, 7, 8, 9 ]

//example of another
const newNums = []
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num)
  }
})
console.log(newNums) //[ 5, 6, 7, 8, 9 ]

//exaple of filter methods in array of object

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks=books.filter((bk)=>{
  // return bk.genre==="History"
  return bk.publish>=2000
})
console.log(userBooks) 
//output 1
/* 
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

//output 2 
/* 
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/