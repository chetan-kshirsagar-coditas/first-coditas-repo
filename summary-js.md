# Javascript Fundamentals

## console
It is used to print or log something on console. It is an object which has .log() method.

```
console.log("Chetan Kshirsagar");
```

## comments
comments are better for human understanding and ignored by interpreter / compiler.

```
//This is single line comment.

/*
  this is multiline 
  comment.
*/  
```
## Data types
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

## Arithmetic Operators
used to perform mathematical operations.
```
console.log(240 + 45); //addition
console.log(240 - 45); //subtraction
console.log(240 * 45); //multiplication
console.log(240 / 45); //division
console.log(240 % 45); //module
```

## String Concatenation and length property and some basic string methods

```
console.log("Chetan"+" "+"Kshirsagar"); //Chetan Kshirsagar

console.log("Chetan Kshirsagar".length);
//17

//to convert the string to UPPER case.
string.toUpperCase();

//to trim the whitespaces before and after the string
string.trim();

```

## Built-in Object (Math)
Helps in arithmetics. Math is namespace object contains static properties and methods.
```
Math.random(); //generates random int in between 0 - 1, not 0 & 1.
Math.min(2,3); //minimum is 2.
Math.max(3,4); //maximum is 4.
Math.round(4.6); //5 round to nearest integer
Math.floor(4.6); //4 floor value
Math.ceil(4.1); //5 ceiling value
```
