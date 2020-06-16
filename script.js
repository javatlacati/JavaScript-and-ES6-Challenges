/*
Create a function sum() that will sum all arguments passed to it.
Quantity of the arguments is unknown.

Use console.log() at the end of the sum() function to print result.
Use ES6 whenever possible.
*/

"use strict";

// Write code here
let sum = (...elems) => {
    let total = elems.reduce(sum_pairs, 0)
    console.log(total);
    return total;
};
let sum_pairs = (num1, num2) => num1 + num2;

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
