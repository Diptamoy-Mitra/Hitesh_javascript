const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map method
const a = myNums.map((num) => {
  return num + 10
})
console.log(a)
//output
/* 
   [
   11, 12, 13, 14, 15,
   16, 17, 18, 19, 20
  ]
*/

//map chainning
const b = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(b)
//output 
/* 
  [
  41, 51,  61, 71,
  81, 91, 101
  ]
*/

//reduce method 
const array1 = [1, 2, 3]

const myTotal = array1.reduce((acc, curr) => {
  console.log(`acc: ${acc} and curr: ${curr}`)
  return acc + curr;
}, 0)
console.log(myTotal) //6
//output 
/*   
  acc: 0 and curr: 1
  acc: 1 and curr: 2
  acc: 3 and curr: 3
*/

//example 
const shoppingCart = [
  {
    itemName: "JS",
    price: 3000

  },
  {
    itemName: "Java",
    price: 5000
  },
  {
    itemName: "NodeJS",
    price: 8000
  }
]
const cost=shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(cost) //16000