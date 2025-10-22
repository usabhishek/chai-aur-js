const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heroes) //Method1
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

const all = marvel_heroes.concat(dc_heroes) //Method2 (Need new varibale to store result when we use concat function)
// console.log(all);

const all_heroes = [...marvel_heroes, ...dc_heroes] //Spread operator(treat each element of both array as individual)
// console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 9, [4, 5]]]
const flat_array = another_array.flat(Infinity)
// console.log(flat_array);

console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))
console.log(Array.from({name: "abhishek"})) // interesting (Have to declare make array from keys or values)


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));