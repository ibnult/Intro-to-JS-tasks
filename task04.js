var a = isNaN('11');
console.log(a);


// Explanation:

// '11' is a string that contains a number.

// isNaN() checks if the value is Not a Number.

// JavaScript will try to convert the string '11' to a number — and it can, so it's not NaN.


var a = isNaN(2-10);
console.log(a); 

// Explanation:

// 2 - 10 is a valid math operation, and it equals -8.

// -8 is a number, so it's not NaN.
