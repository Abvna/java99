// Завдання 1
function sayHello () {
    console.log("Hello world");
}
sayHello();
// Завдання 2 
function greet (name) {
  console.log("Hello " + name );
}
greet("Alex");
// Завдання 3
function sum (a, b) {
    return a + b;
}
console.log(sum(12,21));
// Завдання 4
function multiply (a = 21, b = 42) {
    return a*b;
}
console.log(multiply());
// Завдання 5\
let square = (x) => x*x;

console.log(square(8));
// Завдання 6
function isAdult (age) {
    if (age >= 18 ) {
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(21));
// Завдання 7
function max (a,b,c) {
     return Math.max(a,b,c);    
}
console.log(max(11,22,33));
// Завдання 8
let str = "My name is Artem :)";

function revers (string) {
     return string.split('').reverse('').join('');
}
console.log(revers(str));
// Завдання 9

// перша функція 
let add = (a,b) => console.log(a + b);
// друга функція 
let greet1 = (name1 = "гість") => `Привіт ${name1}`;
// третя функція 
let hello = () => console.log("hello world");
// четверта функція 
let square1 = (x) => console.log(x*x);

// завдання 10

let getLength = (getString) => {return getString.length};
;
 console.log(getLength(str));
// завдання 11
const isEven = (num) => num % 2 === 0;
console.log(isEven(21));


 