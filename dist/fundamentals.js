"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let course = 'Ultimate TypeScript';
let isPublished = true;
let sales = 123_456_789;
let level;
level = 1;
level = 'Beginner';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers2 = [];
numbers.forEach(n => n.toExponential);
let user = [1, 'Omer'];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
})(Grade || (Grade = {}));
;
const myGrade = Grade.B;
console.log(myGrade);
function calculateTax(income, taxYear = 2020) {
    if (taxYear > 2020)
        return income * 0.25;
    return income * 0.2;
}
console.log(calculateTax(100000, 2021));
console.log(calculateTax(40000));
let employee = {
    id: 1,
    name: 'John',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
employee.retire(new Date());
//# sourceMappingURL=fundamentals.js.map