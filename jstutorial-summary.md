# 🔖 Section 1. Getting started
### What is JavaScript ?
JavaScript is a programming language.
It's used to make webpages dynamic and interactive. 
Currently it has reached to significant level that it can do anything like for server side programming it has ``` NodeJs``` for frontend it has ```ReactJs``` ```AngularJs``` and many more derivatives in every other domain.

It has ECMA standard. Provides the core funcionality like ```DOM``` ```BOM```.

JavaScript engines: ```V8``` in Chrome, ```SpiderMonkey``` in Firefox, and ```JavaScriptCore``` in Safari.

# 🔖 Section 2. Fundamentals
### Syntax
`Whitespace`:
Use whitespaces to format your code.
JS bundler removes all whitespaces from the javascript files and put them into single file for deployment, making js code fast and light to load.

`;`: to terminate statement.  
`{}`: for block.  
`// & /* */`: for single and multiline comment.  
`identifiers`: Names you choose for variables, functions, classes etc.  
`keywords`: reserved words (gives signals to interpreter / compiler).

### Variables  
Label that references a value.  

Use `let` and `const` to declare and initialize variables.  
`let` Blocked score and reassignable.  
`const` Blocked score and constant.  
Never ever use `var`, else you'll be fired.

`const name = "Chetan Kshirsagar";`

### Data Types
Answers : What kind of data are you working with ?

primitive  : `number` `bigint` `string` `boolean` `null` `undefined` `symbol`  
complex : `object`

### Numeric Separator
`const budget = 1000000000;`  
`const budget = 1_000_000_000;` Readable

### Primitive vs. Reference Values  
<!-- ![alt text](image.png)   -->
JS stores primitive values on `stack`.
and  objects and functions on the `heap`.  

# 🔖 Section 3. Operators
Arithmetic : `+` `-` `*` `/` `%`  
Unary : `+X` `-X` `X++` `X--` `++X` `--X`  
Comparison : `<` `>` `<=` `>=` `==` `!=`  
Logical : `||` `&&` `!`

# 🔖 Section 4. Control flow Statements
`if`  `if...else`  `if...else...if`
### Ternary Operator  
`condition` ? `true` : `false`;
### switch
`replace multiple if statements`
### while
`runs as long as a specified condition is true`
### do-while
`executes code at least once`
### for
`can specify how many times it should run`
### break
`terminates a loop`
### continue
`skip the current iteraion`
### Comma Operator
`leftExpression, rightExpression` -  `Evaluates from left and returns from right`

# 🔖 Section 5. Functions  
Reusable block of code.  
`Functions are first-class citizens because it can be stored, passed and returned.`
```
function add(a, b) {
    return a + b; 
}
```
`arguments` is a array-like object, contains all the arguments.

 `Hoisting` means all the declarations are move to top of the code by interpreter.

 ### Anonymous Functions
 Function without a name. Lol
 ```
 (function () {
   //anonymous function + IIFE
})();
```
### Pass-By-Value & Pass-By-Reference
`JavaScript passes all arguments to a function by values.`

Argument's values get copied into parameters. `PBV`  
Argument's ref get assigned to params. `PB-Ref` 

### Recursive Function
`Function is a recursive function if it calls itself inside its body.`

# 🔖 Section 6. Objects & Prototypes
`When a function is a property of an object, it becomes a method.`  

### Constructor Function
```
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
```
```
const person = new Person('Chetan','Kshirsagar');
```
what `new` does ?  
//notebook snapshot

### Prototype  
//notebook snapshot

### Constructor / Prototype pattern

```
Initialize the object properties in the constructor function and define methods and properties that can be shared by all instances in the prototype object.
```
### Prototypal Inheritance

```
JavaScript uses the prototypal inheritance instead of classical inheritance. ES5 has Object.create(proto, [extraProperties]).
```
```
Note : You should use the newer ES6 class and extends keywords to implement inheritance. It’s much simpler.
```

### this
```
The this refers to the object that owns the function or method currently being executed.
```
```
"use strict";
//won't refer to the global object accidently (window/global)
```

### globalThis object
```
globalThis object that provides a standard way to access the global object across environments.
```

### Object Properties
Data properties and Accessor properties.  
`Data properties`
```
[[Configurarable]] -> can be redefined or removed.
[[Enumerable]] -> can be returned in the for...in loop.
[[Writable]] -> value of a property can be changed.
[[Value]] -> contains the actual value of a property.
```
```
'use strict';

let person = {};

Object.defineProperty(person, 'name', {
    configurable: false,
    value: 'Chetan Kshirsagar'
});
delete person.name; //won't work
```
`Accessor properties`
```
[[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]]
```
```
Object.getOwnPropertyDescriptor(object, object.property) method allows you to get the descriptor object of a property.
```
```
Object.defineProperty() or Object.defineProperties() methods. These methods can be used to change the attributes of a property.
```
### for...in
The `for...in` loop over the `enumerable` properties.  
It also goes up to the prototype chain and enumerates inherited properties.
```
for(const property in person) {
    console.log(prop + ':' + person[property]);
}
```

### Own Property
The `obj.hasOwnProperty()` method determines whether or not a property is own.

### Factory Function
A factory function is a function that returns a new object.  
Use `Object.create()` to create an object using an existing object as a prototype.

### Object Destructuring
```
let { property1: variable1, property2: variable2 } = object;
```

### Optional Chaining Operator
```
let profile = user ?. profile; //checks is user is null or undefined
```

# 🔖 Section 7. Classes
### Class
class is a `blueprint` for creating objects.  
JavaScript classes are first-class citizens.
```
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const chetan = new Person("Chetan Kshirsagar");
```
class declarations are not hoisted like function declarations.  
class methods are non-enumerable.

### Getter Setter
Use the `get` and `set` keywords to define the JavaScript getters and setters for a class or an object.
```
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
```

### Singleton & IIFE
```
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App'); //IIFE Immediately Invoked Function Expression.
app.start(); // Starting the Awesome App...
```

### Computed Properties
```
let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank.c); // 3
```

### Inheritance 
You can implement inheritance using extends and super keywords.  

`extends` use to inherit all the properties and methods of parent class.  
`super` use to call the constructor of super class from base class.

### new.target
Allows you to detect whether a function or constructor was called using the `new` operator.

### Static methods in ES6
- Static methods are shared among instances of a class.  
- Static methods are bound to a class, not the instances of that class.  
- Method is considered a static method because it doesn’t depend on any instance.  
- `className.staticMethodName();`

### Static properties
- Like a static method, a static property is shared by all instances of a class.
- `className.staticPropertyName;`

### Private Fields 
- To define a private field, you prefix the field name with the `#` sign.
```
class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}
```
- `#radius` is a private field, you can only access it inside the `Circle` class.
- Use getter and setter to access private fields.

### Private Method
```
class MyClass {
  #field;
  get #myField() {
      return #field;
  }
  set #myField(value){
      #field = value;
  }
}
```
- Private methods can be called inside the class, not from outside of the class or in the subclasses.

# Section 8. Advanced Functions
### Function Type
All functions are objects. They are the instances of the Function type. Because functions are objects, they have properties and methods like other objects.

### Functions properties
`length` : returns the number of arguments.
`prototype` : references the actual function object.

### call()
```
functionName.call(thisArg, arg1, arg2, ...);
```
call() method calls a function `functionName` with the arguments (arg1, arg2, …) and the `this` set to `thisArg` object inside the function.

### apply()
The `Function.prototype.apply()` method allows you to call a function with a given `this` value and arguments provided as an array.
```
fn.apply(thisArg, [args]);
```
```
const module = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42
```
### Closure
- A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

```
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi();
```

### Immediately Invoked Function Expression
- executes function immediately after creation.
```
(function(){
    //...
})();
```
Why ?  
- One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.

### Arrow Functions
- Alternative way to write a shorter syntax compared to the function expression.
```
numbers.sort((a, b) => b - a);
```
- Arrow functions do not create their own `this` binding. Instead, they inherit the value of `this` from the enclosing lexical context.  
- Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.

### Rest Parameters
- A rest parameter allows you to represent an indefinite number of arguments as an array.
```
function fn(...args) {
   //...
}
```

### Callback Function
- A callback is a function that you pass into another function as an argument for executing.

# 🔖 Section 9. Promises & Async/Await

### Promises
