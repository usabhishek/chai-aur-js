// const coding = ["js","ruby","pyhton","cpp"]

// const value = coding.forEach((items)=>{
//     console.log(items);
//     return items;
// })

// console.log(value); //undefined forEach loop never returns any value in this way


//How to return then ?
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = myNums.filter((num)=> num > 4)
console.log(newNums);


//Keep in Mind:
// const newNums2 = myNums.filter((num)=>{
//     // num > 4; //It will give empty array because of scope -{}
//     return num > 4; //Correct way
// })
// console.log(newNums2);



// Way to do this in forEach 
const newNums3 = []
myNums.forEach((num) => {
    if(num > 4) {
        newNums3.push(num);
    }
});

console.log(newNums3);

