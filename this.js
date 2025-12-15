// 1 
const user = {
    name: "Anton",
    age: 30,
    sayHi() {
        console.log(`${this.name} hello`);
    },
    // 3
    // 5
    sayName() {
        console.log(this.name);
    }
}
// 2
user.sayBye = function sayBye() {
    console.log("bye");
}

user.sayBye()

// 4
user.sayName()

const admin = {
    name: "Адмін",

}
// 6
admin.sayHi = user.sayHi
admin.sayHi() //виведе адмін

// 7
let ref = user.sayHi;
ref() // тому що контекст об'єкта втрачаєтсья
// 8

function undfName() {
    console.log(this.name);
}

undfName() // в суворому режимі undefined буде тому що name === undefined а в несуворому undefined буде тому що в глобальному об`єкті немає ключа name 
// 9

user.f = function showName() {
    console.log(this.name);
}

admin.f = function showName() {
    console.log(this.name);
}

user.f() //Anton
admin.f() //Адмін

// 10
admin.sayInfo = function sayInfo() {
    for (let key in this) {
        console.log(key);
    }
}
admin.sayInfo()

// 11
function thisFunc() {
    console.log(this);
}
thisFunc() // просто глобальний об'єкт 

function thisFuncStrict() {
    'use strict';
    console.log(this); // тут немає обьекта тому виводить undefined
}

thisFuncStrict()

// 12
const newUser = {
    name: "mouhamed",
    sayHi() {
        function inner() { console.log(this.name); } // не зберігає this
        inner()
        const arrow = () => console.log(this.name); // зберігає this
        arrow()
    }
}
newUser.sayHi()
//13

const user1 = {
    role:"user",
    sayRole() {
        console.log(this.role);     
    }
}

const admin1 = {
    role:"admin",
    sayRole() {
        console.log(this.role);     
    }
}
user1.sayRole = admin1.sayRole
admin1.sayRole = user1.sayRole

user1.sayRole()
admin1.sayRole() //нічого не змінилося

// 14

const nums = {
    a:10,
    b:20,
    getSum() {
        console.log(this.a + this.b);
    }
}

nums.getSum()

// 15

const counter = {
    value:0,
    increase() {
        console.log(this.value++);
    }
}

counter.increase()
counter.increase()
counter.increase()
counter.increase()