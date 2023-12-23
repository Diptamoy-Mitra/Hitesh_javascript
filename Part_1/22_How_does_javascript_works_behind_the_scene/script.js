//22_How_does_javascript_works_behind_the_scene

/* 
      javascript execution context

      {}(code) --------> global execution context (this)

      1.global execution context
      2.functional execution context 
      3.eval execution context (in moongoose)

      //how execute js code

      {}(code)--------->  memory creation phase
              --------->  execution phase

*/

//example 
let val1=10
let val2=5
function addNum(num1,num2){
  let total=num1+num2; 
  return total;
}
let res1=addNum(val1,val2);
let res2=addNum(10,2);

/* 
     1.global execution  --->this
     2.Memory phase -->  
           val1=undefined
           val2=undefined
           addNum=defination
           res1=undefined
           res2=undefined
     3.Execution phase --->
           val1 <--- 10
           val2 <--- 5
           addNum----> new variable enviroment + execution thread --->then delete
                       3.1)memory phase---> 
                                            val1=undefined
                                            val2=undefined
                                            total=undefined
                        3.2)execution context---> 
                                            num1=10
                                            num2=5
                                            total=15  //then total return into global execution context             
            res1=15
            res2 = addNum---> new variable enviroment + execution thread --->then delete
                             3.3)memory phase---> 
                                            val1=undefined
                                            val2=undefined
                                            total=undefined
                             3.4)execution context---> 
                                            num1=10
                                            num2=2
                                            total=12  //then total return into global execution context  
            res2=12                                                                        
                                            
*/

// Callstack ---> its like a stack, follow LIFO method, its build when call any function
