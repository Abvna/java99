// 1

function User(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function getInfo() {
        return `Name: ${this.name}, Age${this.age}`;
    }
}

const anderey = new User("andrey", 22);

console.log(anderey.getInfo());
// 2

function Car() {
    Car.count++;
}

Car.count = 0;

Car.getCount = function () {
    return Car.count;
}

const tesla = new Car();
const tesla1 = new Car();
const tesla2 = new Car();
const tesla3 = new Car();

console.log(Car.getCount());
// 3

function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.isExellent = function () {
        return this.grade >= 90;
    }
}
const students = [
    new Student("ivan", 90),
    new Student("alah", 50),
    new Student("anton", 120),
    new Student("patapim", 30),
    new Student("artem", 100)
].filter(elem => elem.isExellent())

console.log(...students)

function Currency(value, code) {
    this.value = value;
    this.code = code;
    this.converte = function (rate) {
        return ` ${this.value * rate}${this.code}`
    }
}

const euro = new Currency(100, " euro");

const uah = euro.converte(0.3)

console.log(uah);
// 5

function Product(title, price, discount) {
    this.title = title;
    this.price = price;
    this.discount = discount;
    this.getFinalPrice = function () {
        this.price = price - (price * discount / 100)
        return this.price
    }
}
const cereal = new Product("cereal", 100, 20)

console.log(cereal.getFinalPrice());
// 6

function Logger(prefix) {
    this.prefix = prefix;
    this.log = function (msg) {
        return console.log(`${prefix}: ${msg}`);
    }
}

const jopa = new Logger("jopa")

jopa.log("papapapa")

// 7

function Vaild(value) {
    this.value = value;
    this.isValid = function () {
        return this.value.includes("@") && this.value.endsWith(".com") && this.value.length > 10
    }
}
const em = new Vaild("antonchigur1337@gmail.com")
console.log(em.isValid());

// 8

function employee(name, ratePerHour, hours) {
    this.namename = name;
    this.ratePerHour = ratePerHour
    this.hours = hours
    this.getSalary = function () {
        return this.ratePerHour * this.hours
    }
}

const newSalary = new employee("anton", 10, 100)

console.log(newSalary.getSalary());

// 9

function BoookList(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.getAge = function () {
        console.log(`Книжка ${title}, автор ${author}, років книжці ${2025 - year} `);
    }
}
const newBook = new BoookList("Метро 2033", "Дмитро Глуховський", 2005)

newBook.getAge()

// 10

function History (arr) {
    this.arr = arr
    this.add = function (action) {
        this.arr.push(action)
        return arr
    }
    this.last = function () {
        return this.arr[this.arr.length - 1]
    }
    this.clear = function () {
        this.arr.length = 0
        return arr
    }
}

const newTask = new History(["programing, study, work"])

console.log(newTask.add("walk"));
console.log(newTask.last());
console.log(newTask.clear());

// 11

function Rectangle (width, height) {
    this.width = width
    this.height = height
    this.getArea = function () {
        return width * height
    }
    this.getParametre = function () {
       return 2 * (width + height) 
    }
}
const newRectangle = new Rectangle(50, 40)

console.log(newRectangle.getArea());
console.log(newRectangle.getParametre());
// 12

function Navigator (city) {
    this.city = city
    this.MoveTo = function (city) {
        this.city.push(city)
    }
    this.getPath = function () {
        return this.city
    }
}

const newNavigate = new Navigator (["kirovgrad", "kharkiv"])
newNavigate.MoveTo("Kyiv")
console.log(newNavigate.getPath());


