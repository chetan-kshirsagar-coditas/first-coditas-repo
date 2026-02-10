// // // // // 'use strict';
// // // // // let product = {};

// // // // // Object.defineProperty(product, "name", {
// // // // //     configurable : false,
// // // // //     value : "Chetan" 
// // // // // });

// // // // // delete product.name;
// // // // // // 'use strict';

// // // // // // let person = {};

// // // // // // Object.defineProperty(person, 'ssn', {
// // // // // //     configurable: false,
// // // // // //     value: '012-38-9119'
// // // // // // });

// // // // // // delete person.ssn;



// // // // // let chetan = {
// // // // //     name : "chetan"
// // // // // }
// // // // // let  g = {
// // // // //     name : "gaurav",
// // // // //     walk : function(){
// // // // //         console.log("walking...");
// // // // //     }
// // // // // }

// // // // // // chetan.prototype = Object.create(g.prototype);
// // // // // console.log(chetan.name);
// // // // // console.log(chetan.toString());
// // // // // chetan.walk();

// // // // // function MDN(){
// // // // //     console.log(new.target);
// // // // // }
// // // // // new MDN();

// // // // // class Circle {
// // // // //   #radius = 0;
// // // // //   constructor(radius) {
// // // // //     this.radius = radius; // calling setter
// // // // //   }
// // // // //   get area() {
// // // // //     return Math.PI * Math.pow(this.#radius, 2);
// // // // //   }
// // // // //   set radius(value) {
// // // // //     if (typeof value === 'number' && value > 0) {
// // // // //       this.#radius = value;
// // // // //     } else {
// // // // //       throw 'The radius must be a positive number';
// // // // //     }
// // // // //   }
// // // // //   get radius() {
// // // // //     return this.#radius;
// // // // //   }
// // // // // }
// // // // // try {
// // // // //     // 1. Creating a new instance (Constructor calls the SETTER)
// // // // //     const myCircle = new Circle(10);
// // // // //     console.log(`Initial radius is: ${myCircle.radius}`); // Calls the GETTER

// // // // //     // 2. Modifying the property (Calls the SETTER)
// // // // //     myCircle.radius = 20;
// // // // //     console.log(`New radius is: ${myCircle.radius}`); // Calls the GETTER

// // // // //     // 3. Accessing a derived property (Calls the area GETTER)
// // // // //     console.log(`The area is: ${myCircle.area.toFixed(2)}`);

// // // // //     // 4. Attempting an invalid assignment (Throws an error via the SETTER)
// // // // //     myCircle.radius = -5; // This will trigger the `throw` statement

// // // // // } catch (error) {
// // // // //     console.error(`Caught an error: ${error}`);
// // // // // }


// // // // // const person = {
// // // // //   name : "Chetan Kshirsagar"
// // // // // }
// // // // // console.log(     );

// // // // // const human = {
// // // // //   name : "Bhallaldev",
// // // // //   getPower(){
// // // // //     console.log("avada kavada heheheheheh");

// // // // //   }
// // // // // }
// // // // // console.log("h");






// // // // //1 loop only

// // // // //4 
// // // // //1  2  3  4
// // // // //12 13 14 5
// // // // //11 16 15 6
// // // // //10 9  8  7

// // // // // const spiralMatrixPrinter = num => {
// // // // //     const spiralMatrix = [];
// // // // //     let toggler = 1; //row
// // // // //     const threshold = num * num;
// // // // //     for (let i = 1; i < threshold; i++) {
// // // // //         if (toggler) {
// // // // //             //row

// // // // //         }else {
// // // // //             //col
// // // // //         }
// // // // //     }

// // // // //     console.log(spiralMatrix);
// // // // // }
// // // // // spiralMatrixPrinter(4);



// // // // //problem 2

// // // // //max 2 loops


// // // // // const daimondPattern = num => {
// // // // //     for(let i = 1; i <= num; i++){
// // // // //         //frontSpaces
// // // // //         // for(let j = num - i; j >= 1; j--){ //upperLeft
// // // // //         //     console.log(' ');
// // // // //         // }
// // // // //         //numbers
// // // // //         // for(let k = num - i + 1; k <= i; k++){ 
// // // // //         //     console.log(k);
// // // // //         // }
// // // // //         // console.log("\n");


// // // // //         for(let m = i; m <= num; m++){ //lower left
// // // // //             console.log(m);
// // // // //         }
// // // // //         console.log(" ");
// // // // //         for(let n = num - i; n >= 1; n--){
// // // // //             console.log(n);
// // // // //         }
// // // // //         console.log("\n");
// // // // //     }
// // // // // }
// // // // // daimondPattern(3);



// // // // // const oddNumbers = [3, 5, 7];
// // // // // const evenNumbers = [2, 4, 6, 8, 10];

// // // // // const evenAndOddNumbers = [...oddNumbers, ...evenNumbers];


// // // // // const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// // // // // console.log(JSON.stringify(ingredientsList));
// // // // // const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
// // // // // console.log(ingredientsListDeepCopy);


// // // // // const mutation = arr =>{
// // // // //   const str1 = arr[0].split("").sort().join("");
// // // // // //   const str2 = arr[1].split("").sort().join("");
// // // // // //   return str1 === str2 ? true : false;
// // // // // // }
// // // // // // console.log(mutation(["hello", "Hello"]));
// // // // // let contacts = [
// // // // //   {
// // // // //     firstName: "Akira",
// // // // //     lastName: "Laine",
// // // // //     number: "0543236543",
// // // // //     likes: ["Pizza", "Coding", "Brownie Points"],
// // // // //   },
// // // // //   {
// // // // //     firstName: "Harry",
// // // // //     lastName: "Potter",
// // // // //     number: "0994372684",
// // // // //     likes: ["Hogwarts", "Magic", "Hagrid"],
// // // // //   },
// // // // //   {
// // // // //     firstName: "Sherlock",
// // // // //     lastName: "Holmes",
// // // // //     number: "0487345643",
// // // // //     likes: ["Intriguing Cases", "Violin"],
// // // // //   },
// // // // //   {
// // // // //     firstName: "Kristian",
// // // // //     lastName: "Vos",
// // // // //     number: "unknown",
// // // // //     likes: ["JavaScript", "Gaming", "Foxes"],
// // // // //   },
// // // // // ];

// // // // // const lookUpProfile = ( uName, property )=>{
// // // // //   for(const obj of contacts){
// // // // //     if(obj.firstName === uName){
// // // // //       if(obj[property]){
// // // // //         return obj[property];
// // // // //       }else{
// // // // //         return "No such property";
// // // // //       }
// // // // //     }
// // // // //   }
// // // // //   return "No such contact";
// // // // // }
// // // // // console.log(lookUpProfile("Kristian", "lastName"));


// // // // // const fearNotLetter = str =>{
// // // // //   for(let i = 0; i < str.length -1; i++){
// // // // //     if((str.charCodeAt(str.at(i))+1 === str.charCodeAt(str.at(i+1)))){
// // // // //       console.log(str.at(i));

// // // // //       return String.fromCharCode(str.charCodeAt(str.at(i))+1);
// // // // //     }
// // // // //   }
// // // // //   return undefined;
// // // // // }
// // // // // console.log(fearNotLetter("abce"));

// // // // // Source - https://stackoverflow.com/a/60761270
// // // // // Posted by moficodes
// // // // // Retrieved 2026-02-04, License - CC BY-SA 4.0

// // // // // This is your Editor pane. Write your JavaScript hem and
// // // // // use the command line to execute commands
// // // // let generateMatrix = function(A) {
// // // //   let arr = [],
// // // //     counter = 1;
// // // //   for (let i = 0; i < A; i++) {
// // // //     let items = [];
// // // //     for (let j = 0; j < A; j++) {
// // // //       items.push(0);
// // // //     }
// // // //     arr.push(items);
// // // //   }

// // // //   var spiralMatrix = function(arr) {
// // // //     let count = 1;
// // // //     let k = 0; // starting row
// // // //     let m = arr.length; // ending row
// // // //     let l = 0; // starting column
// // // //     let n = arr[0].length; //ending column

// // // //     while (k < m && l < n) {
// // // //       // top
// // // //       for (var i = l; i < n; i++) {
// // // //         arr[k][i] = count;
// // // //         count++;
// // // //       }
// // // //       k++;

// // // //       // right
// // // //       for (var i = k; i < m; i++) {
// // // //         arr[i][n - 1] = count;
// // // //         count++;
// // // //       }
// // // //       n--;

// // // //       // bottom
// // // //       if (k < m) {
// // // //         for (var i = n - 1; i >= l; i--) {
// // // //           arr[m - 1][i] = count;
// // // //           count++;
// // // //         }
// // // //         m--;
// // // //       }

// // // //       // left
// // // //       if (l < n) {
// // // //         for (var i = m - 1; i >= k; i--) {
// // // //           arr[i][l] = count;
// // // //           count++;
// // // //         }
// // // //         l++;
// // // //       }
// // // //     }
// // // //     return arr;
// // // //   };
// // // //   return spiralMatrix(arr);
// // // // };


// // // // // console.log(generateMatrix(6));

// // // // function pyramid(pattern, rows, boolean) {
// // // // let result ="";
// // // // if (boolean){
// // // //   for (let i= rows; i>=1 ; i--){
// // // //     let space = " ".repeat(rows-i);
// // // //     let letter = pattern.repeat(i*2-1);
// // // //      result = space+letter;
// // // //   }
// // // // } 
// // // // if (!boolean) {
// // // //   for (let i= 0; i<rows ; i++){
// // // //     let space = " ".repeat(rows-i);
// // // //     let letter = pattern.repeat(i*2+1);
// // // //      result = console.log(space+letter);
// // // //   }
// // // // }
// // // // return result
// // // // }

// // // // // console.log(pyramid("o", 4, false));

// // // // function titleCase(word){
// // // //   let result=[]
// // // //   let array=word.split(" ")
// // // //   for(let letter of array){
// // // //     let lowerCase=letter.toLowerCase()
// // // //    result.push(lowerCase.replace(lowerCase[0],lowerCase[0].toUpperCase()));
// // // //     // console.log(result)
// // // //   }
// // // //   return result.join(" ");
// // // // }

// // // // // console.log(titleCase("I'm a little tea pot"));


// // // // const bouncer = arr => {
// // // //   let stack = [];
// // // //   for (const r of arr) {
// // // //     // console.log(reserved)
// // // //     if (r !== false 
// // // //     && r !== null 
// // // //     && r !== 0 
// // // //     && r !== "" 
// // // //     && r !== undefined 
// // // //     && !Number.isNaN(r)
// // // //     ) {


// // // //       stack.push(r);
// // // //     }
// // // //   }
// // // //   return stack;
// // // // }
// // // // // console.log(bouncer([false, null, 0, NaN, undefined, ""]));

// // // // const uniteUnique = (...arrs) =>{
// // // //   let allunique = [];
// // // //   allunique[0] = arrs[0][0];
// // // //   for(const arr of arrs){
// // // //     for(const i of arr){
// // // //       if(!allunique.includes(i)){
// // // //         allunique.push(i);
// // // //       }
// // // //     }
// // // //   }
// // // //   return allunique;
// // // // }
// // // // // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// // // // const convertHTML=(string)=>{
// // // //   let newString='';
// // // //   for(let i=0; i<string.length; i++){
// // // //     let oneSymbol = string[i];
// // // //     if(string[i]==='&'){
// // // //       oneSymbol='&amp;';            
// // // //     } else if(string[i]==='<'){
// // // //       oneSymbol='&lt;';; 
// // // //     } else if(string[i]==='>'){
// // // //       oneSymbol='&gt;'; 
// // // //     } else if(string[i]==='"'){
// // // //       oneSymbol='&quot;'; 
// // // //     } else if(string[i]==="'"){
// // // //       oneSymbol='&apos;'; 
// // // //     } 
// // // //      newString += oneSymbol;
// // // //   }
// // // //   return newString;
// // // // }
// // // // // console.log(convertHTML("Schindler's List"));//Schindler&apos;s List



// // // // const sumFibs = num => {
// // // //   let a = 0;
// // // //   let b = 1;
// // // //   let oddSum = 1;
// // // //   let next = 0;
// // // //   while(next < num){
// // // //     let next = a + b;
// // // //     console.log(next);

// // // //     a = b;
// // // //     b = next;
// // // //     if(next % 2 !== 0){
// // // //       oddSum += next;
// // // //     }
// // // //   }

// // // //   return oddSum;
// // // // }
// // // const sumFibs = (num) => {
// // //   let prev = 0;
// // //   let curr = 1;
// // //   let oddSum = 0;

// // //   while (curr <= num) {
// // //     if (curr % 2 !== 0) {
// // //       oddSum += curr;
// // //     }

// // //     let next = prev + curr;
// // //     prev = curr;
// // //     curr = next;
// // //   }

// // //   return oddSum;
// // // };



// // // console.log(sumFibs(4000000)); //4613732







// // // const getAverage = arr => {
// // //   const sum = arr.reduce((a,b)=> a + b ,0);
// // //   return sum / arr.length;
// // // }

// // // const getGrade = mrk => {
// // //   if(mrk === 100){
// // //     return "A+";
// // //   }else if( mrk>=90 ){
// // //     return "A";
// // //   }else if( mrk >= 80){
// // //     return "B";
// // //   }else if( mrk >= 70){
// // //     return "C";
// // //   }else if( mrk >= 60){
// // //     return "D";
// // //   }else if( mrk >= 0){
// // //     return "F";
// // //   }
// // // }

// // // const hasPassingGrade = score => {
// // //   if(getGrade(score) === "F"){
// // //     return false;
// // //   }
// // //   return true;
// // // }

// // // const studentMsg = (scoresArray , studentScore) => {

// // //  if(hasPassingGrade(studentScore)){
// // //    return `Class average: ${getAverage(scoresArray)}. Your grade: ${getGrade(studentArray)}. You passed the course.`
// // //  }else{
// // //    return `Class average: ${getAverage(scoresArray)}. Your grade: ${getGrade(studentArray)}. You failed the course.`;
// // //  }
// // // }

// // // console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));



// // // const employee = {
// // //   isHungry: true,
// // //   name: "Chetan Kshirsagar",
// // //   score: 0,
// // //   seatNumber : undefined
// // // }

// // // if( employee.seatNumber ){
// // //   console.log("Seat Number Exists!!");
// // // }else{
// // //   console.log("Seat Number not exists!!!"); 
// // // }

// // // const keyForAge = "age";
// // // 
// // // const person = {
// // //   name : "Chetan Kshirsagar", //hardcoded
// //   // [keyForAge] : 19, //dynamic evaluation
// // // }

// // // person.address = "SHREE HEIGHTS PG"; //short-cut

// // // console.log(person);

// // // // const example = { foo: true, bar: true };
// // // // for (const name of Object.keys(example)) {
// // // //   console.log(name);
// // // // }


// // // // const foo = {};
// // // // foo.prop = "exists";

// // // // console.log(foo.hasOwnProperty("toString"));
// // // // console.log("toString" in foo);
// // // // console.log(Object.hasOwn(foo, "prop")); // true

// // // const target = { a: 1, b: 2 };

// // // const returnedTarget = Object.assign(target);

// // // console.log(target);
// // // console.log(returnedTarget === target);
// // const books = [
// //   {
// //     title : "House of Dragons",
// //     authorName : "George R.R. Martin",
// //     releaseYear  : 2006
// //   },
// //   {
// //     title : "The Knight of the seven kindoms",
// //     authorName : "George R.R. Martin",
// //     releaseYear  : 2007
// //   },
// //   {
// //     title : "Game Of Thrones",
// //     authorName : "George R.R. Martin",
// //     releaseYear  : 2008
// //   }
// // ]

// // const sortByYear = (first , second) => {
// //   if(first.releaseYear < second.releaseYear ){
// //     return -1;
// //   }else if(first.releaseYear > second.releaseYear){
// //     return 1;
// //   }else{
// //     return 0;
// //   }
// // }

// // const filteredBooks = books.filter((book) => book.releaseYear < 2000)||[{
// //     title: 'Game Of Thrones',
// //     authorName: 'George R.R. Martin',
// //     releaseYear: 2008
// //   }];
// // console.log(filteredBooks);

// // function getIndexToIns(array, target){
// // if(array.length == 0){
// //    return 0;
// // }
// // array.push(target);
// // array.sort((a,b)=> a-b)
// // const index = array.findIndex((val) =>
// //  val === target 
// // );

// // return index;
// // }
// // console.log(getIndexToIns([3, 10, 5], 11));

// const whatIsInAName = ( arrObj, srcObj ) => {
//   const matchingObj = [];
// //   const strObj = [];
//   for(const obj of arrObj){
//     const arrObjString = JSON.stringify(obj);
//     const srcObjString = JSON.stringify(srcObj);
//     console.log(arrObjString, srcObjString);

//     if(arrObjString.includes(srcObjString.replaceAll("{","").replaceAll("}",""))){
//       matchingObj.push(obj);
//     }
//   }
//   return matchingObj;
// }

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));











// 7  2  3 10
//12 15 16 5
//11 14 13 6
// 4  9  8 1
// console.log(` 7  2  3 10
// 12 15 16 5
// 11 14 13 6
//  4  9  8 1`);

const filler = (matrix, size) => {
  for (let index = 0; index < size; index++) {
    let temp = [];
    for (let jindex = 0; jindex < size; jindex++) {
      temp[jindex] = 0;
    }
    matrix.push(temp);
  }
}
const spiralWithCorners = number => {
  const matrix = [];
  filler(matrix, number);
  // console.log(matrix);

  let row = 0;
  let rBound = number;
  let col = 0;
  let cBound = number;
  let element = 1;

  while (element <= (number * number)) {
    //top - done
    for (let k = 0; k < cBound; k++) {
      matrix[row][k] = element++;
    }
    row++;

    //right - done
    for (let k = row; k < rBound; k++) {
      matrix[k][cBound - 1] = element++;
    }
    cBound--;

    //bottom
    for (let k = cBound - 1; k >= col; k--) {
      matrix[rBound - 1][k] = element++;
    }
    rBound--;

    //left
    for (let k = rBound - 1; k >= row; k--) {
      matrix[k][col] = element++;
    }
    col++;
  }



  console.log(matrix);

}

// spiralWithCorners(4);














const employees = [
  {
    name: "chetan",
    age: 33,
    salary: 56000
  }
]



const nameExtrater = employees => {
  return employees.map((employee) => employee.name);
}

const employeesHasAgeGreaterThan32 = employees => {
  return employees.filter((employee) => employee.age > 32);
}

const firstFiveRichPeople = employees => {
  const threshHold = 5;
  let countOfPeople = 0;
  const firstFive = employees.filter((employee) => {
    if (employee.salary > 50000) {
      if (countOfPeople <= threshHold) {
        countOfPeople++;
        return true;
      }
    }
  })
  return firstFive;
}


// console.log(nameExtrater(employees));
// console.log(employeesHasAgeGreaterThan32(employees));





// nbfc non banking finantial com.

// const loanFactory = (r) =>{
//   return (p, n) =>  p * n * r/100;
// }

// const homeLoanCal = loanFactory(9);
// console.log(homeLoanCal(12000, 12));


//repo rate


const createCounter = starting => () => ++starting;
const loadFactory = rateOfInterest => (p, n) => p * n * rateOfInterest / 100;
const loadFactoryWithDynamicRates = rateOfInterest => [(p, n) => p * n * rateOfInterest / 100, (newRate) => rateOfInterest = newRate];


// const counterFrom5 = createCounter(5);
// console.log(counterFrom5());


const [carLoanCal, updateCarLoanRate] = loadFactoryWithDynamicRates(8);
// console.log(carLoanCal(12000, 12));
updateCarLoanRate(10);
// console.log(carLoanCal(12000, 12));









const ranges = [
  {
    min: 30,
    max: 70
  },
  {
    min: 20,
    max: 70
  },
  {
    min: 40,
    max: 80
  }
]
```
const avgCal = (ranges) => {
  let minAll = 0;
  for (const obj of ranges) {
    minAll += obj.min;
  }
  const minAverage = minAll / ranges.length;

  let maxAll = 0;
  for (const obj of ranges) {
    minAll += obj.max;
  }
  const maxAverage = maxAll / ranges.length;

  const avgAverage = (maxAverage + minAverage) / 2;

  return [minAverage, maxAverage, avgAverage];
}
```


const average = ranges.reduce((acc, obj) => {
    
})
