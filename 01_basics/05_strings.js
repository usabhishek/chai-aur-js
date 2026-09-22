// Strings

const name = "Abhishek";
const repocount = 50;

// console.log(typeof name);
// console.log(name+repocount+" Value") // --this is not a modern/good practise
console.log(`I am ${name} and my repository count is ${repocount}.`); //below the escape-``


const gameName = new String('Abhishek');
//we can access functions if we declare string like this also check it in console.

// console.log(gameName[0]); // that doesn't mean it is array , it means we can access our element like this also
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.__proto__.toUpperCase);
// console.log(gameName.toUpperCase());

// stringFunctions javascript
//Example--

let str;

// // 1. length
// str = "Hello";
// console.log("1. Length:", str.length); // 5

// // 2. toUpperCase()
// str = "hello";
// console.log("2. To Upper Case:", str.toUpperCase()); // "HELLO"

// // 3. toLowerCase()
// str = "HELLO";
// console.log("3. To Lower Case:", str.toLowerCase()); // "hello"

// // 4. charAt(index)
// str = "JavaScript";
// console.log("4. Character at index 4:", str.charAt(4)); // "S"

// // 5. indexOf(substring)
// str = "I love JavaScript";
// console.log("5. Index of 'love':", str.indexOf("love")); // 2

// // 6. includes(substring)
// str = "Learn JS";
// console.log("6. Includes 'JS':", str.includes("JS")); // true

// // 7. slice(start, end)
// str = "JavaScript";
// console.log("7. Slice (0 to 4):", str.slice(0, 4)); // "Java"

// // 8. substring(start, end)
// str = "JavaScript";
// console.log("8. Substring (4 to 10):", str.substring(4, 10)); // "Script"

// // 9. split(separator)
// str = "apple,banana,grape";
// console.log("9. Split by comma:", str.split(",")); // ["apple", "banana", "grape"]

// // 10. replace(old, new)
// str = "Hello World";
// console.log("10. Replace 'World' with 'JavaScript':", str.replace("World", "JavaScript")); // "Hello JavaScript"


//Note : slice supports negative indexing but substring function not
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
