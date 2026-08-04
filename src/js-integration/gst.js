// @ts-nocheck
export function calculateGST(amount) {
    return amount * 0.05;
}

export function sayHello(name) {
    return `Hello, ${name}!`;
}

// When using type declaration file, all the features of the target module should be declared in the .d.ts file.
// Otherwise, TypeScript will not recognize them and will throw an error when trying to import them in other files.