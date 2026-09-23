// Reduce method
const array = [1, 2, 3, 4]
const initialvalue = 0;
const sum = array.reduce(
    (accumulator , currentvalue)=>{
        console.log(`accumulator value is ${accumulator} and current value is ${currentvalue}`)
    return accumulator + currentvalue
},initialvalue)
console.log(sum);


//In brief: 
const myTotal = array.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);