// A Singleton is a design pattern where you want only one instance of a particular object to exist. For example , database connection object, you want only one instance of it to exist. So, you can use a singleton pattern to create that object and ensure that only one instance of it is created. In JavaScript, you can create a singleton object using the Object.create() method or by using a closure.
// We can define Objects through Literals and through Constructors
// ----------------------------------------------------------

// definig objects through literals
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

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]); 

console.log(JsUser["full name"]); //can't use dot operator here because Because dot notation requires a valid JavaScript identifier, and "full name" contains a space, so you must use bracket notation.

console.log(JsUser[mySym]); // to access symbol


JsUser.email = "abhi@ai.com"

// Object.freeze(JsUser); //It locks the objects for further change so we cannot add, modify or delete any key-value pair from it. It will not give error but it will not change the value of key.

// Object.seal(JSUser) 
// It prevents an object from adding or deleting properties, but you can still modify existing properties.

// console.log(JsUser);

JsUser.email = "abhi@microsoft.com"
// console.log(JsUser);  -- We can modify our properties of object any time we want.


//functions in objects
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
    // `` :backticks and the method is knows as string interpolation.
    // It will replace the ${this.name} with the value of the name key of the JsUser object.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
