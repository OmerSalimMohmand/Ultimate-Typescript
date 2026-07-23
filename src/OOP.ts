// Classes and Objects:

class Account {
  readonly id: number;
  owner: string;
  private _balance: number; // private modifier enforces some rules on the balance property, as it can only be changed via the deposit method after recording the transaction.
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    // the return type of the constructor is always the class itself as it returns an instance of the class
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    // Record a transaction
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }

  private calculateTax(): number {
    return this._balance * 0.1;
  }
}

let account = new Account(1, "Omer", 0);
account.deposit(100);
console.log(account.getBalance());
console.log(account);
console.log(typeof account); // always returns object as the type of a class is always an object
console.log(account instanceof Account);

// Parameter Properties | Getters and Setters:
// Parameter properties are a shorthand for defining and initializing properties in the constructor.
// They allow you to declare and initialize class properties directly in the constructor parameters, reducing boilerplate code.

class Account {
  nickname?: string;
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
  private calculateTax(): number {
    return this._balance * 0.1;
  }
}

let account = new Account(1, "Omer", 0);
account.balance = 1000;
console.log(account.balance);

// Index Signature:
// Using index signatures, we can create properties dynamically just like JS but we also get type checking, type safety.

class SeatAssignment {
  [seatNumber: string]: string; // Index signature allows us to define properties with dynamic keys of type string and values of type string.
}

let seats = new SeatAssignment();
seats["A1"] = "Omer";
seats.A2 = "Ali";
seats.A3 = "Ahmed";

//Static Members:
// When making a property or method static, it means that it belongs to the class itself rather than to instances of the class. And only a single instance of that property or method exists in memory.
class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// Inheritance:
// Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class. In TypeScript, we can use the `extends` keyword to create a subclass that inherits from a superclass. This enables code reuse and establishes a hierarchical relationship between classes.

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking...");
  }
}

class Student extends Person {
  constructor(
    public studentId: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName);
  }

  takeExam() {
    console.log("Taking an exam...");
  }
}

let student = new Student(1, "Omer Salim", "Mohmand");
console.log(student.fullName);
student.walk();
student.takeExam();

// Method Overriding:
// Overriding a method means changing the implementation of a method in a subclass that is already defined in its superclass.

class Teacher extends Person {
  // constrouctor of the superclass has been inherited by the subclass, so we don't need to define it again unless we want to add more properties or change its behavior.
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

let teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);

// Polymorphism:
// Polymorphism in programming means different objects can respond to the same method call in their own way.
// In TypeScript, polymorphism is achieved through method overriding and interfaces. It allows us to write code that can work with objects of different classes in a uniform way.

let people: Person[] = [
  new Person("Jane", "Doe"),
  new Student(1, "Alice", "Smith"),
  new Teacher("Bob", "Johnson"),
];

printFullNames(people);

function printFullNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName); // Here we are calling the fullName getter, which is polymorphic. Each class has its own implementation of fullName.
  }
}

// Override keyword helps us achieve polymorphism by allowing us to override methods in subclasses. It ensures that the method we are overriding exists in the superclass and helps prevent accidental method name mismatches.

// Real-World Backend Polymorphism Example: Payment Processing System
abstract class Payment{
  abstract processPayment(): void;
}

class PayPalPayment extends Payment {
  override processPayment() {
    console.log("Processing PayPal payment.");
  }
}

class CreditCardPayment extends Payment {
  override processPayment() {
    console.log("Processing credit card payment.");
  }
}

class StripePayment extends Payment {
  override processPayment() {
    console.log("Processing Stripe payment.");
  }
}

// Now our checkout service becomes very clean.
// It becomes more flexible and can handle different payment methods without changing its implementation.
function checkout(payment: Payment) {
  payment.processPayment();
}

checkout(new PayPalPayment());
checkout(new CreditCardPayment());
checkout(new StripePayment());
