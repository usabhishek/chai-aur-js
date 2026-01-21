coding = ["js","ruby","php","cpp"];
// coding.forEach(function (val){
//     console.log(val);
// });

//arrow function
// coding.forEach((item)=>{
//     console.log(item);
// })

//Another way
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

// We can also access index and arr with item 
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
})