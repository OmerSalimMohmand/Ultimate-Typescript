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
console.log(customer?.birthday?.getFullYear()); // This chain gets executed only if we have a customer and that customer has a birthday.

// Optional element access operator:
// let customers = undefined;
let customers = [{ name: 'John' }, { name: 'Jane' }];
console.log(customers?.[0]); // This chain gets executed only if customer array is not null or undefined.

// Optional call operator:
let log: any = (message: string) => console.log(message);
// let log: any = null;
log?.('Hello World'); // This gets executed only if log is referening an actual function, otherwise it will be ignored.

// Nullish Coalescing Operator (??):
let speed: number | null = null;

let ride = {

    //Falsy value in JS: undefined, null, 0, false, NaN, ''
    speed: speed? speed : 30
    //If the speed is 0 which is a valid value, it still be considered falsy and the default value of 30 will be used. To avoid this, we can use the check for null or undefined explicitly.
    speed: speed !== null ? speed : 30;
    //Even better, we can use the nullish coalescing operator (??) to check for null or undefined values and provide a default value.
    speed: speed ?? 30;
}

// Type Assertion:

// Unlike type casting in other languages, type assertion does not perform type conversion.
// It has no impact on the runtime behavior of the code and is purely a compile - time construct.
// It tells the TypeScript compiler to treat a variable as a specific type, allowing access to properties and methods of that type.
let phone = document.getElementById("phone") as HTMLInputElement;
let phone = <HTMLInputElement> document.getElementById("phone"); // Type Assertion using angle-bracket syntax
phone.value // can't access 'value' because until we assert the type of 'phone' as HTMLInputElement.

// unknown type:

// unknown is a type-safe counterpart of any. It means that we can assign any value to a variable
// of type unknown, but we cannot perform any operations, access properties or calling any methods,
// on it without first asserting its type or narrowing it down to a more specific type.
// This helps prevent errors at runtime.
// Whereas using any it won't complain at compile time and will throw an error at runtime. 
// typeof operator only works with primitive types, and we use instanceof operator to check if an
// object is an instance of a class or constructor function.

function render(document: unknown) {
    if (typeof document === 'string') {
        console.log(document.toUpperCase());
    } else if (document instanceof HTMLDocument) {
        console.log(document.title);
    }
}

// never Type:
// The `never` type represents values that never occur. For example, a function that always throws an error
// or a function that has an infinite loop will have a return type of `never`.
// It helps compiler to catch unreachable code. The default return type void lacks this capability.

function processEvent(): never {
    while (true) {
        // Read a message from the event queue and process it
    }
}
processEvent();
console.log('This line is unreachable');

function reject(message: string): never {
    throw new Error(message);
}
reject('error occurred');
console.log('This line is unreachable');