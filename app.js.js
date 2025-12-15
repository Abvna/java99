// завдання 1 
let num = 7;
let bigInt = 1324354364536342112235235235n;
let str = "string";
let bool = true;
let undf;
let none = null;

console.log(num, typeof(num));
console.log(bigInt, typeof(bigInt));
console.log(str, typeof(str));
console.log(bool, typeof(bool));
console.log(undf, typeof(undf));
console.log(none);

// null - якщо мы навмисно залишаемо пусте значення щоб потім помістите туди якесь значення, undefined - якщо немае такого значення яке ми намагаємося знайти 

// завдання 2

let num1 = 2.487

console.log(num1.toFixed(2));
console.log(Math.round(num1));
console.log(Math.sqrt(num1));

// завдання 3

const JavaScript = "JavaScript is awesome!";

const findIs = "is";

console.log(JavaScript.length);
console.log(JavaScript.toUpperCase());
console.log(JavaScript.includes(findIs));

let raplace = JavaScript.replace("awesome", "fun");
console.log(raplace);

// завдання 4 

console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));// false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
console.log(Boolean([]));// true
console.log(Boolean({}));// true

// завдання 5

let games = ["dota", "cs", "minecraft", "deep rock galactic", "Rust"];

games.push("far cry");
games.unshift("roblox");
games.pop();
console.log(games);
console.log(games.length);

// завдання 6 

let user = {
    name: "Alex",
    age: 25,
    email: "alex567@gmail.com"
}
user.isAdmin = true
user.age = 99;
delete user.email

console.log(Object.keys(user));
console.log(Object.values(user));














