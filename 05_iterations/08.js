// Reduce method
const array = [1, 2, 3, 4]
const initialvalue = 0;
const sum = array.reduce(
    (accumulator , currentvalue)=>{
        console.log(`accumulator value is ${accumulator} and current value is ${currentvalue}`);
    return accumulator + currentvalue
},initialvalue)
console.log(sum);