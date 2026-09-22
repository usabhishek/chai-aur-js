// VARIABLES

const id = 12345;
var name = "Abhishek"
let age = 18;
nationality = "Indian"; // It is also allowed but try to minimize its use
let date; //It gives o/p undefined here because we have not assigned any value to it


//id = 55 // Modification in const keyword is not allowed
console.log(id); // Thorws TypeErorr

name = "Hitesh"
age = 30;
nationality = "American";

console.table([id,name,age,nationality,date]);

//Always prefer const and let keyword due to it resolves the issue of block scope and functional scope
//In javascript semicolon is not necessary because JS follow ASI(Automatic semicolon insertion) but keep in practise to avoid ASI pitfalls