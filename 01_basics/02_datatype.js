// Datatype summary

//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('124');
const anotherId = Symbol('124')

console.log(Id)
// console.log(Id == anotherId) -return false
// console.log(Id == anotherId)  -returns false

// ****************************************************************************************

//Non primitive(Reference type)
// Array , objects , functions

const array1 = ["Hello","Hi",123];

let myobj = {
    name : "Abhishek",
    age : 22
}
//dtype -object  -->console.log(typeof myobj);

const myFunc = function(){
    console.log("Hello world");
}
myFunc(); //output - Hello world
//dtype -object function

// **********************************************************************************************

// Dynamic typing means you don’t need to declare the type of a variable when you create it. The type is determined at runtime, based on the value assigned.
// let x = 42;      ->x is a number
// x = "hello";     ->now x is a string

// *****************************************************************************************
//stack memory (primitive) and heap memory(non-primitive)
let myname = "Abhishek";
let anothername = myname;
anothername = "Hitesh";

console.log(myname);
console.log(anothername);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne;

userTwo.email="Abhi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

