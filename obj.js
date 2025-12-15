// 1
const car = {
    brand: "Porshe",
    model: "911",
    year: 1963
}

console.log(car.brand);
console.log(car.model);
console.log(car.year);
// 2
const user = {

}
user.name = "Jake";
user.age = 15;
user.isAdmin = false;
// 3
delete user.isAdmin
console.log(user);
// 4
const person = {
    "like cats": true
}
console.log(person["like cats"]);
// 5
let key = "price"
let product = { name: "Laptop", price: 2000 };

console.log(product[key]);
//  6
console.log("name" in user);
// 7
function createUser(name, age) {
    return { name, age }
}
console.log(createUser("sanya", 20));
//  8
const fruit = "banana";

const basket = {
    [fruit]: 3 
}

console.log(basket);
// 9
let city = { name: "Kyiv", population: 3000000, isCapital: true };
for (const key in city) {
    console.log(key, city[key]);
}
// 10
function countProperties(obj) {
    let counter = 0;

    for (let key in obj) {
        counter++
    }
    return counter
}

console.log(countProperties(city));
// 11

const obj = {
    test:undefined
}
console.log(obj.test === undefined); // тут ми просто дивимося що таке значення = undefined
console.log("test" in obj); // тут вже зрозумыло що таке значення э в об'єкті
// 12

const key1 = "age"

const user1 = {
    name:"anton",
    age:30 
}
console.log(user1);
delete user1[key1]
console.log(user1);
// 13
let salaries = { John: 100, Ann: 160, Pete: 130 };

for (let key in salaries) {
    salaries[key] = salaries[key] + ((salaries[key] * 15 ) / 100)
    console.log(salaries[key]);
    
}

14

let car1 = { brand: "BMW", speed: 220, electric: false, color: "black" };

for (const key in car1) {
    if (typeof car1[key] === "string") {
        console.log(car1[key]);
    }
}
// 15

let item = "phone";

let store = {
    [item + "Count"]: 5
};

console.log("phoneCount" in store);
// 16

let codes = { "44": "UK", "1": "USA", "49": "Germany" };

for (let key in codes) {
    console.log(key); // вивелося у порядку зростання 
}
// 17

let codes1 = { "+44": "UK", "+1": "USA", "+49": "Germany" };

for (let key in codes1) {
    console.log(key); // вивелося у порядку додавання 
}

// 18

function copyObject(source) {
    const copy = {}

    for (let key in source) {
        copy[key] = source[key]
    }
    return copy

}

console.log(copyObject({ name: "anton", surename: "chigur", killSomeone: false }));

// 19

const user2 = { name: "Ivan", age: 20 };
const scores1 = { math: 90, english: 80 };


function createReport(user, source) {
    const report = {};

    for (let key in source) {
        user[key] = source[key]
    }

    for (let key in user) {
        report[key] = user[key]
    }

    return report
}

console.log(createReport(user2, scores1));
