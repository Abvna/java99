// 1
class User {
    constructor(name) {
        this.name = name
    }
    sayHI() {
        console.log("Привіт " + this.name);
    }
}

const newUser = new User("anton chigur")

newUser.sayHI()
//  2

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}

const newRec = new Rectangle(10, 20)
const newRec1 = new Rectangle(30, 20)
console.log(newRec.getArea());
console.log(newRec1.getArea());

// 3
class Car {
    constructor(model) {
        this.model = model
    }
    drive() {
        console.log(this.model + " зараз рухаеться");
    }
}

const tesla = new Car("tesla")
const makan = new Car("makan")
tesla.drive()
makan.drive()
// 4

class Counter {
    constructor(value) {
        this.counter = value
    }
    count() {
        this.counter++
    }
    less() {
        this.counter--
    }
    remove() {
        this.counter = 0
    }
    current() {
        return this.counter
    }
}

const newCounter = new Counter(0)
console.log(newCounter.counter);
newCounter.count()
newCounter.count()
newCounter.count()
newCounter.count()
console.log(newCounter.counter);
newCounter.less()
newCounter.less()
console.log(newCounter.counter);
console.log(newCounter.current());
newCounter.remove()
console.log(newCounter.counter);
// 5

class Movie {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
    getInfo() {
        return `Назва ${this.name}, року ${this.year}`
    }
}

const newMovie = new Movie("тачки", 2009)

console.log(newMovie.getInfo());
// 6
class Product {
    constructor(price) {
        this.price = price
    }
    getPrice(percent) {
        const tax = this.price * (percent / 100);
        return this.price + tax;
    }
}
const product = new Product(300);
console.log(product.getPrice(10))

// 7

class Student {
    constructor(arr) {
        this.marks = arr
    }
    allMarks() {
        const mark = this.marks.reduce((acc, mark) => acc += mark, 0)
        return Math.floor(mark / this.marks.length)
    }
}

const marks = new Student([10, 12, 8, 6, 9, 7])
console.log(marks.allMarks());

// 8

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getCord(point) {
        const ox = this.x - point.x;
        const oy = this.y - point.y;
        return Math.sqrt(ox * ox + oy * oy);
    }
}

const t = new Point(2, 4)
const t1 = new Point(3, 5)
console.log(t.getCord(t1))

// 9

class Timer {
    constructor(time) {
        this.time = time
    }

    start() {
        const interval = setInterval(() => {
            console.log(this.time);
            this.time--
            if (this.time < 0) {
                clearInterval(interval)
            }
        }, 1000)
    }
}

const newTimer = new Timer(10)
// newTimer.start() //РОЗКОМЕНТУВАТИ

// 10

class Book {
    constructor(pages) {
        this.pages = pages
    }
    isBig() {
        return this.pages > 300
    }
}

const newBook = new Book(400)
const newBook1 = new Book(200)
console.log(newBook.isBig());
console.log(newBook1.isBig());

// 11

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
    deposit(sum) {
        this.balance += sum
        return this.balance
    }
    withdraw(sum) {
        if (sum <= this.balance) {
            this.balance -= sum
        } else {
            console.log("недостатньо коштів");
        }
    }
}

const newAcc = new BankAccount(1000)
console.log(newAcc.balance);
newAcc.deposit(500)
console.log(newAcc.balance);
newAcc.withdraw(300)
console.log(newAcc.balance);

// 12

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    add(odd) {
        this.x += odd.x;
        this.y += odd.y;
        return this;
    }
    substract(odd) {
        this.x -= odd.x;
        this.y -= odd.y;
        return this;
    }
}

const vector1 = new Vector(3, 6);
const vector2 = new Vector(6, 3);
console.log(vector1.add(vector2));
console.log(vector1.substract(vector2));

// 13

class Emmplooy {
    constructor(name, sallary) {
        this.name = name
        this.sallary = sallary
    }
    yearSallary() {
        return this.sallary * 12
    }
}

const newEmmploy = new Emmplooy("anton", 1000)
console.log(newEmmploy.yearSallary());
// 14

class Clock {
    constructor(format) {
        this.format = format;
        this.intervalId = null;
        this.currentTime = { hours: 0, minutes: 0, seconds: 0 };
    }

    formatTime() {
        const { hours, minutes, seconds } = this.currentTime;
        return this.format
            .replace('h', String(hours).padStart(2, '0'))
            .replace('m', String(minutes).padStart(2, '0'))
            .replace('s', String(seconds).padStart(2, '0'));
    }

    start() {
        if (this.intervalId !== null) return;

        this.intervalId = setInterval(() => {
            const now = new Date();
            this.currentTime = {
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            };
            console.log(this.formatTime());
        }, 1000);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}


const myClock = new Clock("h:m:s");
// myClock.start()

// 15

class Temperature {
    constructor(celsian) {
        this.celsian = celsian
    }
    farenheit() {
        return (this.celsian * 1.8) + 32
    }
    celvins() {
        return this.celsian + 273.15
    }

}

const newTemp = new Temperature(30)

console.log(newTemp.farenheit());
console.log(newTemp.celvins());

// 16

class PasswordGenerator {
    constructor() {
        this.values = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    }
    random(length) {
        let password = ""
        for (let i = 0; i <= length; i++) {
            const randomIndex = Math.floor(Math.random() * this.values.length)
            password += this.values[randomIndex]
        }
        return password
    }
}

const newPassword = new PasswordGenerator()
console.log(newPassword.random(6));

// 17

class Queue {
    constructor(queue) {
        this.queue = queue
    }
    add(element) {
        this.queue.push(element)
    }
    del(element) {
        this.queue.shift(element)
    }
    length() {
        return this.queue.length
    }
}

const newQueue = new Queue(["anton", "alah", "vanya", "artem"])

newQueue.add("sahur")
console.log(newQueue.queue);
newQueue.del()
console.log(newQueue.queue);
console.log(newQueue.length());

// 18

class ShoppingCart {
    constructor() {
        this.cart = []
    }
    addProduct(productName, price) {
        this.cart.push({ productName, price })
    }
    deeleteProduct(productName) {
        const item = this.cart.filter(curentProduct => curentProduct.productName === productName)
        this.cart.splice(this.cart.indexOf(item), 1)
    }
    totalPrice() {
        return this.cart.reduce((acc, curentProduct) => acc + curentProduct.price, 0)
    }
}

const newCart = new ShoppingCart()

newCart.addProduct("apple", 10)
newCart.addProduct("banana", 20)
newCart.addProduct("orange", 15)
console.log(newCart.cart);
newCart.deeleteProduct("banana")
console.log(newCart.cart);
console.log(newCart.totalPrice());

// 19

class Weather {
    #temperature
    constructor(temp) {
        this.#temperature = 0
        this.temperature = temp
    }
    get temperature() {
        return this.#temperature
    }

    set temperature(value) {
        if (typeof value !== "number") {
            console.log("введіть число")
            return
        }
        this.#temperature = value
    }
}

const newTempr = new Weather(25)

console.log(newTempr.temperature);

// 20

class Animal {
    constructor(name) {
        this.name = name
    }
    makeSound() {
        console.log("звук тварини");
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super(name)
        this.sound = sound
    }
    makeSound() {
        return this.name + " " + this.sound
    }
}


class Dog extends Animal {
    constructor(name, sound) {
        super(name)
        this.sound = sound
    }
    makeSound() {
        return this.name + " " + this.sound
    }
}


const cat = new Cat("барсік", "meow")
console.log(cat.makeSound());

const dog = new Cat("шарік", "гав")
console.log(dog.makeSound());

// 21

class Vehicle {
    constructor(transport) {
        this.transport = transport
    }
    maxSpeed() {
        return 0
    }
}

class Bicycle extends Vehicle {
    maxSpeed() {
        return 40
    }
}
class Motorcycle extends Vehicle {
    maxSpeed() {
        return 200
    }
}
const bicycle = new Bicycle("bmx")
console.log(bicycle.maxSpeed());

const motorcycle = new Motorcycle("yamaha")
console.log(motorcycle.maxSpeed());

// 22

class Shape {
    constructor() { }
    getArea() {
        console.log("dont have area")
    }
}

class Circle extends Shape {
    constructor(area) {
        super()
        this.area = area
    }
    getArea() {
        return Math.floor(Math.PI * this.area ** 2)
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side
    }
    getArea() {
        return this.side ** 2;
    }
}

const newCircle = new Circle(10)
console.log(newCircle.getArea());

const newSquare = new Square(20)
console.log(newSquare.getArea());

// 23

class UserAccount {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

class Admin extends UserAccount {
    banUser(user) {
        user.isBanned = true
    }
}

const newUser1 = new UserAccount("ded", "dedishe456@gmail.com")
console.log(newUser1);

const newAdmin = new Admin("anton", "nikogoNeYbival1337@gmail.com")

newAdmin.banUser(newUser1)
console.log(newUser1);
console.log(newAdmin);


// 24 

class Message {
    constructor(massaage) {
        this.massaage = massaage
    }
    send() {
        console.log("зроби метод");
    }
}

class EmailMessage extends Message {
    constructor(massaage, email) {
        super(massaage)
        this.email = email
    }
    send() {
        console.log(`надсилання на емейла на ${this.email}: ${this.massaage}`);
    }
}

class SMSMessage extends Message {
    constructor(massaage, number) {
        super(massaage)
        this.number = number
    }
    send() {
        console.log(`надіслано смс на ${this.number}: ${this.massaage}`);
    }
}

const emailMsg = new EmailMessage("привіт антон чугур", "namazik1337@gmail.com")
emailMsg.send()

const smsMsg = new SMSMessage("привіт антон чугур", "+38050133789")
smsMsg.send()

//  25

class Loger {

    constructor() {

    }
    static log(massage) {
        const currentDate = new Date()
        const timeOnly = currentDate.toLocaleTimeString('uk-UA', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            year: 'numeric',
            month: 'long',
            day: 'numeric',

        });
        return console.log(`це повідомлення відправлено "${massage}" відправлено у ${timeOnly}`);
    }
}

Loger.log("привіт, я зараз в Україні")
Loger.log("привіт, я зараз в кафе")

// 26

class Cache {
    #privateStorage = {}

    set(key, value) {
        this.#privateStorage[key] = value
    }
    get(key) {
        return this.#privateStorage[key]
    }
    has(key) {
        return key in this.#privateStorage
    }
}

const userCache = new Cache()

userCache.set("name", "anton")
userCache.set("age", "32")

console.log(userCache.get("name"));
console.log(userCache.get("age"));
console.log(userCache.has("name"));
console.log(userCache.has("email"));

// 27

class Pokemon {
    constructor(name) {
        this.name = name
    }
    attack() {

    }
}
class FirePokemon extends Pokemon {
    
    attack() {
        console.log(`${this.name} зараз атакує вогнем!!!!`);
    }
}

class WaterPokemon extends Pokemon {
   
    attack() {
        console.log(`${this.name} зараз атакує водою!!!!`);
    }
}

const firePokemon = new FirePokemon("Чармандер")
firePokemon.attack()

const waterPokemon = new WaterPokemon("Сквиртл")
waterPokemon.attack()

// 28

class Repository {
    #mainRep
    constructor() {
        this.#mainRep = []
    }

    add(obj) {
        if (this.#mainRep.find(item => item.id === obj.id)) {
            console.log("такий айди вже існує");
            return
        }
        this.#mainRep.push(obj)
    }
    remove(id) {
        const deletedElem = this.#mainRep.findIndex(elem => elem.id === id)
        this.#mainRep.splice(deletedElem, 1)
    }
    findById(id) {
        return this.#mainRep.find(elem => elem.id === id) || undefined
    }
    getAll() {
        return this.#mainRep.slice()
    }
}

const newRep = new Repository()

newRep.add({ id: 1337, name: "anton" })
newRep.add({ id: 42, name: "alah" })
console.log(newRep.getAll());
console.log(newRep.findById(1337));
newRep.remove(42)
console.log(newRep.getAll());

// 29

class AdvancedClock extends Clock {
    constructor(format, precision) {
        super(format)
        this.format = format;
        this.intervalId = null;
        this.currentTime = { hours: 0, minutes: 0, seconds: 0 };
        this.precision = precision
    }
    start() {
        if (this.intervalId !== null) return;

        this.intervalId = setInterval(() => {
            const now = new Date();
            this.currentTime = {
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds()
            };
            console.log(this.formatTime());
        }, this.precision);
    }
}
const myAdvClock = new AdvancedClock("h:m:s", 200);
//  myAdvClock.start()