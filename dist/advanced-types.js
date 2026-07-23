"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee);
employee.retire(new Date());
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseFloat(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10.5'));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(`Hola ${name.toUpperCase()}`);
    else
        console.log('Hola');
}
greet("Lima");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday);
function getCustomer(id) {
    return id === 0 ? null : {};
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let customers = [{ name: 'John' }, { name: 'Jane' }];
console.log(customers?.[0]);
let log = (message) => console.log(message);
log?.('Hello World');
let speed = null;
let ride = {
    speed: speed ? speed : 30,
    speed: speed !== null ? speed : 30,
    speed: speed ?? 30
};
let phone = document.getElementById("phone");
let phone = document.getElementById("phone");
phone.value;
function render(document) {
    if (typeof document === 'string') {
        console.log(document.toUpperCase());
    }
    else if (document instanceof HTMLDocument) {
        console.log(document.title);
    }
}
function processEvent() {
    while (true) {
    }
}
processEvent();
console.log('This line is unreachable');
function reject(message) {
    throw new Error(message);
}
reject('error occurred');
console.log('This line is unreachable');
//# sourceMappingURL=advanced-types.js.map