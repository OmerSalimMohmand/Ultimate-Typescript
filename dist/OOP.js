"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
    calculateTax() {
        return this._balance * 0.1;
    }
}
let account = new Account(1, "Omer", 0);
account.deposit(100);
console.log(account.getBalance());
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
class Account {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
    calculateTax() {
        return this._balance * 0.1;
    }
}
let account = new Account(1, "Omer", 0);
account.balance = 1000;
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats["A1"] = "Omer";
seats.A2 = "Ali";
seats.A3 = "Ahmed";
class Ride {
    static _activeRides = 0;
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("Walking...");
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeExam() {
        console.log("Taking an exam...");
    }
}
let student = new Student(1, "Omer Salim", "Mohmand");
console.log(student.fullName);
student.walk();
student.takeExam();
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);
let people = [
    new Person("Jane", "Doe"),
    new Student(1, "Alice", "Smith"),
    new Teacher("Bob", "Johnson"),
];
printFullNames(people);
function printFullNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
class Payment {
    logPaymentDetails() {
        console.log("Logging payment details...");
    }
}
class PayPalPayment extends Payment {
    processPayment() {
        console.log("Processing PayPal payment.");
        this.logPaymentDetails();
    }
}
class CreditCardPayment extends Payment {
    processPayment() {
        console.log("Processing credit card payment.");
    }
}
class StripePayment extends Payment {
    processPayment() {
        console.log("Processing Stripe payment.");
    }
}
function checkout(payment) {
    payment.processPayment();
}
checkout(new PayPalPayment());
checkout(new CreditCardPayment());
checkout(new StripePayment());
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Rendering a ${this.color} circle with radius ${this.radius}`);
    }
    getRadius() {
        return this.radius;
    }
}
let shape = new Circle('red', 5);
shape.render();
shape.getRadius();
shape.getRadius();
class GoogleCalender {
    name;
    constructor(name) {
        this.name = name;
    }
    addEvent(event) {
        throw new Error("Method not implemented.");
    }
    removeEvent(event) {
        throw new Error("Method not implemented.");
    }
}
class Cube {
    color;
    constructor(color) {
        this.color = color;
        this.color = color;
    }
    volume() {
        throw new Error("Method not implemented.");
    }
    render() {
        throw new Error("Method not implemented.");
    }
}
let cube = new Cube("red");
console.log(cube);
//# sourceMappingURL=OOP.js.map