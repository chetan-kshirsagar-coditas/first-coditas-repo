const person = {
    firstName : "Chetan",
    lastName : "Kshirsagar"
};
for (const name in person) {
  // console.log(name);
}
// console.log("toString" in person);

// Object.defineProperties(person,{
//     toString : {
//         enumerable : true
//     }
// })

// console.log(person.propertyIsEnumerable("toString"));
// console.log(person.propertyIsEnumerable("firstName"));
for (const name in person) {
  // console.log(name);
}

// const foo = {};
// foo.prop = "exists";

// console.log(foo.hasOwnProperty("toString"));
// console.log("toString" in foo);
// console.log(Object.hasOwn(foo, "prop")); // true



//shallow copy using Object.assign()
const firstCopy = { a: 1, b: 2, c : {digit : 3} };
const secondCopy = {} 
Object.assign(secondCopy , firstCopy);
firstCopy.name = "chetan";

// firstCopy.c = {}

firstCopy.c.digit = 4;
// console.log(firstCopy);
// console.log(secondCopy);




