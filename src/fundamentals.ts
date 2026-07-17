let course = 'Ultimate TypeScript';
let isPublished = true;
let sales = 123_456_789;
let level;
level = 1;
level = 'Beginner';

function render(document: any) {
    console.log(document);
}

//Arrays:
let numbers= [1, 2, 3];
let numbers2: number[] = [];
numbers.forEach(n => n.toExponential);

//Tuples:
let user: [number, string] = [1, 'Omer'];
user.push(1); // this is allowed but not recommended, it can cause bugs. use tuples with caution.
// console.log(user);

//Enums:
const enum Size { Small = 1, Medium, Large };
//const enum Size { Small = 'a', Medium = 'b', Large = 'c' };
let mySize: Size = Size.Medium;
console.log(mySize);

const enum Grade { A = 1, B, C, D };
const myGrade: Grade = Grade.B
console.log(myGrade);

//Functions:
function calculateTax(income: number, taxYear = 2020): number {
  if (taxYear > 2020) // using (taxYear || 2020) instead of taxYear is an old way to provide a default value if the taxYear is optional.
    return income * 0.25;
  return income * 0.2;
}

console.log(calculateTax(100000, 2021));
console.log(calculateTax(40000))

//Objects:
let employee: {
  readonly id: number,
  name: string,
  email?: string,
  retire: (date: Date) => void
} = {
  id: 1,
  name: 'John',
  retire: (date: Date) => {
    console.log(date);
  }
};

console.log(employee);
employee.retire(new Date());

//Type Aliases:

type Employee = {
  readonly id: number;
  name: string;
  email?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);
employee.retire(new Date());

//Union Types:
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2; // here we can get all the methods of number type
    else
        return parseFloat(weight) * 2.2
}

console.log(kgToLbs(10)); // 22
console.log(kgToLbs('10.5')); // 23.1

//Intersection Types:
type dragable = {
  drag: () => void;
};

type resizable = {
  resize: () => void;
};

type UIWidget = dragable & resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal Types:

// let quantity: 50 | 100 = 100; // Better way to write it is to use type alias as below

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable types:
function greet(name: string | null | undefined): void {
    if (name)
        console.log(`Hola ${name.toUpperCase()}`);
    else
        console.log('Hola');
}
greet("Lima");

// Optional Chaining:
type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional Property Access Operator (?.)
console.log(customer?.birthday);

// Make the birthday property optional in the Customer type
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {};
}

let customer = getCustomer(1);
// Optional Property Access Operator (?.)
console.log(customer?.birthday?.getFullYear()); // This chain gets executed only if we have a customer and that customer has a birthday.

// Optional element access operator:
// let customers = undefined;
let customers = [{ name: 'John' }, { name: 'Jane' }];
console.log(customers?.[0]); // This chain gets executed only if customer array is not null or undefined.

// Optional call operator:
let log: any = (message: string) => console.log(message);
// let log: any = null;
log?.('Hello World'); // This gets executed only if log is referening an actual function, otherwise it will be ignored.