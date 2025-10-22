//Objects can be defined through Literals(not singeleton it make multiple instances) and through Constructors(Singeleon object)

//singeleton -Object.create (more later)
// ----------------------------------------------------------
// object literals
const mySym = Symbol("key1"); //declaring a symbol and using it as a key
const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek kashyap", // we cannot access full name through dot operator here
    [mySym]: "mykey1", //to use symbol as a key
    age: 20,
    location: "Rewa",
    email: "abhi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //can't use dot operator here using bracket is the only way left
// console.log(JsUser[mySym]); // to access symbol


JsUser.email = "abhi@ai.com"
//Object.freeze(JsUser); //It locks the objects for further change 
// console.log(JsUser);

JsUser.email = "abhi@microsoft.com" //Cannot give error but not possible
// console.log(JsUser); 


//functions in objects
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //`` :backticks (method knows as string interpolation.(Syntax--`string with ${expression}`))
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
