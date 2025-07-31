//COMPARISONS

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1); THAT MIGHT GIVE CONFUSING VALUE

console.log(null > 0); //FALSE
console.log(null == 0); //FALSE ( Here, == does not coerce null to a number.It only returns true when we compare --)
console.log(null == undefined) // true
console.log(null >= 0); // TRUE (here null becomes 0 thats why 0 >= 0 -True)

// console.log(undefined == 0); //FALSE IN ALL THE CASES
// console.log(undefined > 0);
// console.log(undefined < 0);

// === -STRICT COMPARISON ALSO CHECKS DATATYPE
// console.log("2" == 2) //TRUE (CONVERT STRING TO INTEGER)
// console.log("2" === 2) //FALSE