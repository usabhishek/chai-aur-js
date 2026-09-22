// const tinderUser = new Object();  -- It explicitly calls the Object constructor to create a new object. It is equivalent to using the object literal syntax {}. The new Object() syntax is less commonly used than the object literal syntax.

const tinderUser = {};

tinderUser.id = "111ac";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "kashyap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "c"};


const obj3 = { obj1, obj2 }; //object inside object

// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'c' } }
// console.log(obj3.obj1['2']); // b


Object.assign(obj1, obj2); // Method 1: Assign obj2 properties to obj1 and return obj1. It will modify obj1 and return it. It will not create new object. So, it is not a good practise to use this syntax.

// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }


const obj4 = Object.assign({}, obj1, obj2); //Method 2: best practise to use this syntax -- use a new object and assign the properties of obj1 and obj2 to it. It will not modify obj1 and obj2. It will create a new object and return it.

// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }


// const obj5 = {...obj1, ...obj2}; //Method 3: Spread operator, used more in production
// console.log(obj5);


user1 = [{name:"abhishek",id:"1"},
    {name:"Sam",id:"2"},
    {name:"Rahul",id:"3"}];

console.log(user1[2].id); // returns 3


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // return an array.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //It will return an array of array. Each inner array will contain key-value pair of the object.

console.log(tinderUser.hasOwnProperty("id"));

//De-structure of objects
const course = {
    coursename: "javascript revison",
    price: "399",
    courseInstructor: "hitesh"
}

course.courseInstructor // It is a one way but we can also destructure it using other ways
const {courseInstructor: instructor} = course; // alias as instructure

// console.log(courseInstructor); // Throws error that courseInstructor is not defined because we have destructured it and assigned it to instructor variable. So, we can access it using instructor variable.

console.log(instructor);


// APIs use these two formats to send data --1. Json object format and 2. Json array format

// Example - GET /api/course/123 returns a single course object in JSON format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } 

// Example - GET /api/courses returns an array of course objects in JSON format
// [
//     {},
//     {},
//     {}
// ]