// --- @ts-nocheck // Disable type checking for this file

/**
 * Calculate income tax
 * @param {number} income - Net income
 * @returns {number} - Tax amount
 */

// Using JSDoc we can provide type information to the TypeScript compiler.
// This allows us to use TypeScript's type checking and IntelliSense features in JavaScript files.
// We can also explain the function and its parameters and return type. It can be seen when hovering over the function name.
export function calculateTax(income) {
    return income * .3;
}