const user = {
    username: "Abhishek",
    price: 3999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to market`);
        console.log(this); //it retun the current context of object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //it return the empty object in terminal but in brwoser it print it context as windows

// function chai(){
//     console.log(this); //it return lot of values
//     let username = "Abhishek"
//     console.log(this.username); //undefined
// }

// chai() 
// context only work inside object it cannot work in functions thats why it gives undefined in output

// ---------------arrow function--------------
const chai =  () => {
    let username = "Abhishek"
    console.log(this); //undefined
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return
// const addTwo = (num1, num2) => ( num1 + num2 ) 

// we don't need to add return in implicit return it assumes automatically
// if we use curly brackets we need to add return function and if we use paranthesis we don't need to add return in it

const addTwo = (num1, num2) => ({username: "Abhishek"}) //paranthesis is added so automatically object is returned
console.log(addTwo(3, 4)); 