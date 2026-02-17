//Higher order functions
//Decorators
//Currying

function multiply(...args){
    return args.reduce((acc, ele) => acc * ele);
}

const decorator = callback => {
    return (...args) => {
        console.log("yeeeee");
        return callback(...args);
    }
}

multiply = decorator(multiply);


//configurable decorator
let one = () => console.log("one");

const logger = numOfStars => {
    return ( callback ) => {
        console.log("*".repeat(numOfStars));
        callback();
        console.log("*".repeat(numOfStars));
    }
}

one = logger(9)(one);