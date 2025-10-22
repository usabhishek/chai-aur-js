const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Thanos" , "Ironman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[0]);

//Methods in JS
// myArr.push(6);
// myArr.pop();
// console.log(myArr);


// myArr.unshift(9); //It place element into first postiton and shift forward others 
// myArr.shift(); //It removes first element and shift backward others

// console.log(myArr.includes(9)); //String 
// console.log(myArr.indexOf(3)); //(-1 if element not present)

// const newArr = myArr.join(); //convert array to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//Slice and Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log("SLICE: ",myn1);


console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //it make changes in original array and extract range from it
console.log("C ", myArr);
console.log("SPLICE :",myn2);
