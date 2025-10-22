// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "111ac";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "c"};

// const obj3 = { obj1, obj2 }; //object inside object

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2); //best practise to use this syntax


const obj3 = {...obj1, ...obj2}; //used more in production
// console.log(obj3);

user1 = [{name:"abhishek",id:"1"},
    {name:"Sam",id:"2"},
    {name:"Rahul",id:"3"}];
// console.log(user1[2].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //They will return array which helps in iteration.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));

//Destructure of objects
const course = {
    coursename: "javascript revison",
    price: "399",
    courseInstructor: "hitesh"
}

// course.courseInstructor --is a one way but we can also destructure it
const {courseInstructor: instructor} = course; //alias as instructure

// console.log(courseInstructor);
console.log(instructor);


//here we talked about api and json formats
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//we can also get our api result in array format 
// [
//     {},
//     {},
//     {}
// ]