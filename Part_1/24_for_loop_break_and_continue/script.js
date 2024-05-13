//24_for_loop_break_and_continue 

//for loop
for (let i = 0; i < 10; i++) {
  const element = i;
  // if(element==5){
  //   // console.log('5 is the best no \n')
  // }
  console.log(element) //0 1 2 3 4 5 6 7 8 9  
}

//another example
for (let i = 0; i <= 2; i++) {
  console.log(`outer loop: ${i}`)
  for (let j = 0; j <= 2; j++) {
    console.log(`inner loop: ${j} and outer loop ${i}`)
  }
}

//output
/* 
  outer loop: 0
inner loop: 0 and inner loop 0
inner loop: 1 and inner loop 0
inner loop: 2 and inner loop 0
 outer loop: 1
inner loop: 0 and inner loop 1
inner loop: 1 and inner loop 1
inner loop: 2 and inner loop 1
 outer loop: 2
inner loop: 0 and inner loop 2
inner loop: 1 and inner loop 2
inner loop: 2 and inner loop 2

*/

//also we can use in multiplication

//for loop on array
let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element) //flash  batman  superman 
}

//break and continue in for loop 
for (let index = 1; index <=20; index++) {
  const element = index;
  if(element==5){
    console.log(`detected 5`)
    continue;
    // break;
  }
  console.log(`value of element: ${element}`)
}
//output of break 
/* 
value of element: 1
value of element: 2
value of element: 3
value of element: 4
detected 5
*/
//output of continue 

/* 
value of element: 1
value of element: 2
value of element: 3
value of element: 4
detected 5
value of element: 6
value of element: 7
value of element: 8
value of element: 9
value of element: 10
value of element: 11
value of element: 12
value of element: 13
value of element: 14
value of element: 15
value of element: 16
value of element: 17
value of element: 18
value of element: 19
value of element: 20

*/