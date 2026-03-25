//Higher order functions
//Decorators
//Currying

function multiply(...args) {
    return args.reduce((acc, ele) => acc * ele);
}

const decorator = callback => {
    return (...args) => {
        console.log(`calling function : ${callback.name} with ${args}`);
        const result = callback(...args);
        console.log(`function returned : ${result}`)
        return result;
    }
}

multiply = decorator(multiply);
// console.log(multiply(2,3,4));


//configurable decorator
let one = () => console.log("one");

const logger = numOfStars => {
    return (callback) => {
        return () => {
            console.log("*".repeat(numOfStars));
            callback();
            console.log("*".repeat(numOfStars));
        }
    }
}

one = logger(3)(one);
// one();


// Our original function
function greet(name) {
  return `Hello, ${name}!`;
}

// A decorator function that adds logging
function withLogging(fn) {
  // This is the wrapper function that "decorates" the original
  return function(...args) {
    console.log(`Calling function with args: ${args}`);
    const result = fn(...args);
    console.log(`Function returned: ${result}`);
    return result;
  };
}
// Apply the decorator
const greetWithLogging = withLogging(greet);
// Use the decorated function
greetWithLogging('John'); 

