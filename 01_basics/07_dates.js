let myDate = new Date();
console.log(myDate); // 2026-09-22T10:45:07.024Z

// console.log(myDate.toString());
console.log(myDate.toDateString()); // Tue Sep 22 2026

// console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // 22/9/2026

// console.log(myDate.toLocaleString());
console.log(typeof myDate); // Now it is an object

let myCreatedDate = new Date(2012 ,0 ,31); // Here month start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") --here month start from 01
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// ${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
