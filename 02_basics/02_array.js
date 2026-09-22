const marvel_heroes = ["molecule man", "one above all", "Galactus"] //dtype -- object
const dc_heroes = ["superman", "human torch", "batman"]


marvel_heroes.push(dc_heroes) //Method1
// console.log(marvel_heroes);  // It will add dc_heroes array as a single element in marvel_heroes array

// console.log(marvel_heroes[3]); 
// returns an object (dc_heroes array)

// console.log(marvel_heroes[3][0]); // returns superman

const all = marvel_heroes.concat(dc_heroes) //Method2: It needs new varibale to store result when we use concat function)
// console.log(all);

const all_heroes = [...marvel_heroes, ...dc_heroes] //Method 3: Spread operator(treat each element of both array as individual)
console.log(all_heroes); // ['molecule man', 'one above all', 'Galactus', 'superman', 'human torch', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 9, [4, 5]]]
const flat_array = another_array.flat(Infinity) // default to depth = 1, Infinity means flatten all the nested arrays
console.log(flat_array);

// console.log(Array.isArray("Abhishek")) -- returns false
// console.log(Array.from("Abhishek"))
console.log(Array.from({name: "abhishek"})) // interesting (Have to declare make array from keys or values)


const score1 = 100
const score2 = 200
const score3 = 300
// console.log(Array.of(score1, score2, score3));