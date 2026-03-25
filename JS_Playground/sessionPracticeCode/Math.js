//Static Properties of Math (namespace object)

//1. PI
console.log("PI: ",Math.PI);
//2. SQRT of 2
console.log("SQRT of 2: ",Math.SQRT2);


//Static Methods of Math 

//abs - Returns the absolute value of the input.
console.log("Abs value of -54.5: ",Math.abs(-54.5)); //always +ve

//ceil - Returns the smallest integer greater than or equal to the input.
console.log("ceil value of 7.1: ",Math.ceil(7.1)); //8

//floor - Returns the largest integer less than or equal to the input.
console.log("floor value of 7.9: ",Math.floor(7.9)); //7

//max - Returns the largest of zero or more numbers.
console.log("max between 5 & 6: ",Math.max(5,6)); //6

//min - Returns the smallest of zero or more numbers.
console.log("min between 5 & 6: ",Math.min(5,6)); //5

//pow - Returns base x to the exponent power y.
console.log("5 power 2: ",Math.pow(5,2)); //10

//round - Returns the value of the input rounded to the nearest integer.
console.log("2.6 rounded to: ",Math.round(2.6)); //3

//clz32 - Returns the number of leading zero bits of the 32-bit integer input.
console.log("leading zeroes in 1's binary rep.: ",Math.clz32(1));
 
//random - Returns a random number between 0 and 1, not 0 and 1.

//Task : Always return a number bet 10-15(in)
//analogy : Math.random() * (UB - LB) + LB

console.log("Random Number between 10-15: ",Math.round((Math.random() * 5) + 10));



//cbrt - Returns the cube root of the input.
Math.cbrt()

//sqrt - Returns the positive square root of the input.
Math.sqrt()














