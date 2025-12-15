
// Завдання 1 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separateEvenOdd(arr) {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        } else {
            acc.odd.push(num);
        }
        return acc;

    }, { even: [], odd: [] })
}

console.log(separateEvenOdd(nums));

// завдання 2 
const password = "Stasik211"

function isValidPassword(pwd) {
    if (pwd.length >= 8 && /\d/.test(pwd) && /[A-ZА-Я]/.test(pwd)) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword(password));
// завдання 3

const cart = [
    { name: "apple", price: 10 },
    { name: "banana", price: 5 },
    { name: "milk", price: 20 }
];

function getTotalCart(cart) {
    return cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0)
}
console.log(getTotalCart(cart));

// завдання 4

function multiplicationTabel(num) {
    const results = []

    for (let i = 1; i <= 10; i++) {
        const result = num * i
        results.push(result)
    }
    return results
}

console.log(multiplicationTabel(7));
// завдання 5
const users = [
    { id: 1, name: "  olga ", age: 20, roles: ["user"], banned: false },
    { id: 2, name: "IHOR", age: 17, roles: ["user", "moderator"], banned: false },
    { id: 3, name: "  anna", age: 31, roles: [], banned: true },
    { id: 4, name: "stasik", age: 25, roles: ["user", "admin"], banned: false },
];

function prepareUsers(userArr) {
    const filterUsers = userArr.filter((user) => !user.banned && user.age >= 18);

    const filtredUsers = filterUsers.map(user => {
        const cleanName = user.name.trim().toLowerCase().replace(/^\w/, firstLetter => firstLetter.toUpperCase());
        const isPrevileged = user.roles.includes("moderator") || user.roles.includes("admin");

        return {
            ...user,
            name: cleanName,
            isPrevileged: isPrevileged,
        }

    })

    return filtredUsers.filter(user => user.isPrevileged === true);

}
console.log(prepareUsers(users));

// завдання 6

function makeId(prefix = "id") {

    let counter = 0;

    return function () {
        counter++;
        return `${prefix}${counter}`;
    }
}
const gen = makeId("user");

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());










