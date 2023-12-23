// Immediately_invoked_function

(function chai(){ //named IIFE
 console.log('DB CONNECTED')
})(); //run automatically 


//don't need this types of call
// chai()

//first ()-->function defination  next ()--> execution call
//IIFE starts or envoked but it do not know where to stop their  context, so need to stop  we use ; 

//example
((name)=>{  //Un-named IIFE
  console.log(`TWO : ${name}`) //TWO : hitesh 
})('hitesh');