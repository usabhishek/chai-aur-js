//iife => Immediately Invoked Function Expression
// Why it is used? --Avoid polluting the global scope(Variables inside iife remains private)
(function one(){
    const a=5;
    console.log('Db connected')
})();//NAMED IIFE

//We need to specifically put semi-colon after iife function to tell the compiler that our function ends(function is invoked but don't know when the context is stopped)
// console.log(a); //Reference error: a is not defined


//Arrow function in iife
( ()=>{
    console.log("Db connected again")
})();//UNNAMED IIFE


//iife function with parameter
( (a) =>{
    console.log(a);
})("DB disconnected");




