//Dates

let myDate=new Date()
console.log(typeof myDate) //object
console.log(myDate) //2023-10-07T21:58:45.051Z
console.log(myDate.toString()) //Sun Oct 08 2023 03:29:41 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()) //8/10/2023, 3:30:46 am

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate) //2023-01-22T18:30:00.000Z
console.log(myCreateDate.toDateString()) //Mon Jan 23 2023
myCreateDate=new Date(2023,0,23,5,3)
console.log(myCreateDate.toLocaleString()) //23/1/2023, 5:03:00 am
myCreateDate=new Date("2023-01-14")
console.log(myCreateDate.toLocaleString()) //14/1/2023, 5:30:00 am

let myTimeStamp=Date.now()
console.log(myTimeStamp) //1696716599554 //in ms
console.log(myCreateDate.getTime()) //1673654400000 
console.log(Math.floor(Date.now()/1000)) //1696716841

let newDate=new Date()
console.log(newDate)//2023-10-07T22:16:12.234Z
console.log(newDate.getMonth()+1) //10


