function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2; 
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ",result);

function loginuser(username){
    return `hi ${username} How are you ?`
}

// console.log(loginuser("Abhishek"))

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Abhishek",
    prices: 999
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

// --------------------
const myNewArray = [200, 400, 100, 600];

function returnlastValue(getArray){
    // return getArray[-1];
    //Output: undefined -Because in JavaScript, arr[-1] means you’re trying to access a property named "-1" (a string key), not the last element. 

    return getArray[getArray.length - 1];
}

console.log(returnlastValue(myNewArray));
console.log(returnlastValue([200, 400, 500, 1000]));

// ---------------Ways of declaring function ---------
// type 1 -function declaration (Hoisted -can be used before declaration)
function addone(num){
    return num + 1;
}

console.log(addone(5))

// type 2 -function expression (not hoisted)- can be anonymous or named
const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(8))

// there are other types of functions like arrow functions , anonymous function, iife, callback, coonstructor and higher order, generator and async function,recursive and rest function etc..