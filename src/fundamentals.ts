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