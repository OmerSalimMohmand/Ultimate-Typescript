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