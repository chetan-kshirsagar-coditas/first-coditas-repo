# Javascript Fundamentals

## Introduction to Javascript
### console
It is used to print or log something on console. It is an object which has .log() method.

```
console.log("Chetan Kshirsagar");
```

### comments
comments are better for human understanding and ignored by interpreter / compiler.

```
//This is single line comment.

/*
  this is multiline 
  comment.
*/  
```
### Data types
Data types are used to identify that which kind of data are we working on.
```
Number
BigInt
String
Boolean
null
undefined
Symbol : newer feature
Object 
```

### Arithmetic Operators
used to perform mathematical operations.
```
console.log(240 + 45); //addition
console.log(240 - 45); //subtraction
console.log(240 * 45); //multiplication
console.log(240 / 45); //division
console.log(240 % 45); //module
```

### String Concatenation and length property and some basic string methods

```
console.log("Chetan"+" "+"Kshirsagar"); //Chetan Kshirsagar

console.log("Chetan Kshirsagar".length);
//17

//to convert the string to UPPER case.
string.toUpperCase();

//to trim the whitespaces before and after the string
string.trim();

```

### Built-in Object (Math)
Helps in arithmetics. Math is namespace object contains static properties and methods.
```
Math.random(); //generates random int in between 0 - 1, not 0 & 1.
Math.min(2,3); //minimum is 2.
Math.max(3,4); //maximum is 4.
Math.round(4.6); //5 round to nearest integer
Math.floor(4.6); //4 floor value
Math.ceil(4.1); //5 ceiling value
```


## Variables
variable is a container to store a value.
```
Before ES6 
var price = 60;

After ES6 let and const, never use var
const price = 34; // const cannot be reassigned | let can be.
```

### The Increment and Decrement Operator
```
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19
```

### String Concatenation with Variables

```
let myPet = 'kalidas';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet kalidas.'
```

### String Interpolation
```
const myPet = 'kalidas';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet kalidas.
```
### typeof operator
returns the data type of value.
```
console.log(typeof 30); // Output: number
console.log(typeof "Kshirsagar"); // Output: string
console.log(typeof true); // Output: boolean
```

## JavaScript Versions: ES6 and Before
ES6 refers to ECMAScript standard for Javascript which was firstly released in 2015, it can also refered as ES2015.
<!-- ![alt text](ES6-Timeline.svg) -->


## Conditional Statements
### If Statement
```
if(condition){
    //statement will get executed if condition is true.
}
```
### If...Else Statements
```
if(sale) {
  console.log('Time to buy!'); //sale = true
}else{
  console.log('Time to wait for a sale.'); //sale = false
}
```

### Comparison Operators
```
less than: <
greater than: >
less than or equal to: <=
greater than or equal to: >=
is equal to: ===
is not equal to: !==
```
### Logical Operators
```
and operator (&&)
or operator (||)
not operator (!)
```
### Truthy and Falsy
```
0
"" or ''
null
undefined
NaN

Are FALSY, else all are truthy.
```

### Ternary Operator
```
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
```
### Else If Statements
```
let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
```
### The switch keyword
```
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'
```