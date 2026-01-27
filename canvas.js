// //     // function add(num1, num2) {
// //     // let largeNumStr;
// //     // let smallNumStr;
// //     // let addition = "";
// //     // if(num1.toString().length > num2.toString().lenth){
// //     //     largeNumStr = num1.toString();
// //     //     smallNumStr = num2.toString();
// //     // }else{
// //     //     largeNumStr = num2.toString();
// //     //     smallNumStr = num1.toString();
// //     // }
// //     // addition = largeNumStr.slice(0,largeNumStr.length - smallNumStr.length);
// //     // for(let i = (largeNumStr.length - smallNumStr.length); i < largeNumStr.length; i++){
// //     //         let tempAdd = Number(largeNumStr.charAt(i)) + Number(smallNumStr.charAt((largeNumStr.length - smallNumStr.length - i)));
// //     //         addition = addition + tempAdd.toString();
// //     // }
// //     // console.log(addition);
// //     // }
// //     // add(156,5);

// //     function onlyOne(...arr) {
// //         let isFirstTrue = false;
// //         for(let i = 0; i < arr.length; i++){
// //             if(arr[i] == true){
// //                 if(isFirstTrue){
// //                     return false;
// //                 }else{
// //                     isFirstTrue = true;
// //                 }
// //             }
// //         }
// //         return true;
// // }


// // const input = "Coditas, 11, Nyati";
// // const inputArr = input.split(",");
// // const finalStr = `Company: ${inputArr[0]}[7], years in op:${inputArr[1]}[2], location:${inputArr[2]}[5]`;
// // console.log(finalStr);


// function titleToNumber(title) {
//   let n = title.length;
//   let revTitle = title.split("").reverse().join("");
//   let ColumnValue = 0;
//   for(let i = 0; i < n; i++){
//     ColumnValue += ( (revTitle.at(i).charCodeAt(0) - 64) * Math.pow(26,i) );
//   }
//   return ColumnValue;
// }
// // console.log(titleToNumber("AC"));


// function domainName(url){
//   //your code here
//   return url.includes("www") ? url.split(".")[1] : url.split("/")[2].split(".")[0];
// }




// // solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// function solution(list){

//   let rangedString = "";
//   let fast = 0,slow = 0;
//   const minThreshold = 3;
//   let currentConsecutives = 1;
//   while(fast < list.length){
//     rangedString += ""+list[fast];
//     while( list[fast]+1 === list[fast+1] ){
//     currentConsecutives++;
//     fast++;
//   }
//   currentConsecutives >= minThreshold ? rangedString += "-"+list[fast]+",": rangedString += ",";
//   if(currentConsecutives == 2) rangedString +=list[fast]+",";
//   currentConsecutives = 1;
//   fast++;
//   }
//   return rangedString.slice(0,rangedString.length-1);
// }
// // console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));



// function arr2bin(arr){
//   let totalSum = 0;
//     for(let element of arr){
//       if( typeof(element) === 'number' || typeof element === 'boolean'){
//           totalSum += element;
//       }
//     }
//     // console.log(totalSum);

//     let binaryString = "";
//     while(totalSum > 0){
//       let remainder = totalSum % 2;
//       binaryString = binaryString +""+remainder ;
//       totalSum = Math.floor(totalSum/2);
//     }
//     return binaryString.split("").reverse().join("");  
// }
// // console.log(arr2bin([3]));


// function alphabetPosition(text) {
//   let rawString = text.replace(/[\p{P}\p{S}\s\.5|8]/gu,'').toLowerCase();
//   // console.log(rawString);

//   let indexedString = "";
//   for(let i = 0; i < rawString.length; i++){
//     indexedString += " " + ( rawString.charCodeAt(i) - 96);
//   }
//   return indexedString;
// }
// // console.log(alphabetPosition("The sunset sets at twelve55666676788 o' clock."));

// // 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11






// function isIsogram(str){
//   let uniqueChars = [];
//   let refinedString = str.toLowerCase();
//   for(let i = 0; i < refinedString.length; i++){
//     if(uniqueChars.includes(refinedString[i])) return false;
//     uniqueChars.push(refinedString[i]);
//   }
//   return true;
//   //...
// }
// // console.log(isIsogram("aba"));





// function permutations(string) {
// 	let AllCharacters = string.split("");

// }

// // console.log(permutations("abc"));



// function findOdd(A) {
//   let map = new Map();
//   for(let i = 0; i < A.length; i++){
//     if(!map.has(A[i])){
//       map.set(A[i],1);
//       continue;
//     }
//     map.set(A[i],map.get(A[i]) + 1);
//   }
//   for(let i = 0; i < A.length; i++){
//     if(map.get(A[i]) % 2 !== 0 ){
//       return A[i];
//     }
//   }
// }
// // console.log(findOdd([0,1,0,1,0]));

// // var uniqueInOrder=function(iterable){
// //   console.log(iterable.length);

// //   if(iterable.length === 0) return [];
// //   let allUnique = [iterable[0]];
// //   let pointer = 1;
// //   while(pointer < iterable.length){
// //     if(iterable[pointer] != iterable[pointer-1]){
// //       allUnique.push(iterable[pointer])
// //       pointer++;
// //     }else{
// //       pointer++
// //     }
// //   }
// //   return allUnique;
// // }

// // console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// // console.log(uniqueInOrder([]));

// function order(words){
//   let orderedString = [];
//   let allWords = words.split(" ");
//   console.log(allWords);
//   for(let word of allWords){
//     const position = Number(word.match(/[0-9]/gu));
//     orderedString[position - 1] = word;
//   }
//   return orderedString.join(" ");

// }

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// console.log(order("is2 Thi1s T4est 3a"));

// function basicOp(operation, value1, value2){
//   switch(operation){
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//   }
// }
// console.log(basicOp("+", 9, 9));

// function persistence(num) {
//    //code me
//   //  console.log(num.toString().length);
//    let totalMultiPlications = 0;
//    while(num.toString().length > 1){
//     totalMultiPlications++;
//     num = num.toString().split("").reduce((mult,ele) => mult * parseInt(ele));
//    }
//    return totalMultiPlications;
// }
// console.log(persistence(39));
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)


// function reverseWords(str) {
//   let wordsArray = str.split(" ");
//   for(let i = 0; i < wordsArray.length; i++){
//    wordsArray[i] = wordsArray[i].split("").reverse().join("");
//   }
//   return wordsArray.join(" ");
// }
// //"This is an example!" ==> "sihT si na !elpmaxe"
// console.log(reverseWords("This is an example!"));

// function duplicateEncode(word){
//    let map = new Map();
//    for(let i = 0; i < word.length; i++){
//       if(!map.has(word[i])){
//           map.set(word[i],1)
//           continue;
//       };
//       map.set(word[i],map.get(word[i])+1);
//    }
//    let encodedString = "";
//    for(let i =0 ;i < word.length; i++){
//          if(map.get(word[i]) > 1){
//             // console.log(word[i],map.get(word[i]));
//             encodedString += ")";
//          }else{
//             // console.log(word[i],map.get(word[i]));
//             encodedString += "(";
//          }
//       }
//     return encodedString;
// }
// console.log(duplicateEncode("recede"));


// var encryptThis = function(text) {
//   let allWords = text.split(" ");

//   let refinedArray = allWords.map((ele,i) => {

//    const ASCII = ele.charCodeAt(0);
//    console.log(ASCII);
//    ele = ele.replace(ele[0],"");
//    ele = ele.split("");
//    //swapping
//    const temp =ele[0];
//    ele[0] = ele[ele.length - 1];
//    ele[ele.length - 1] = temp;
//    return ASCII+ele.join("");
//   });
//   return refinedArray.join(" ");
// }
// //  === "104olle 119drlo"
// console.log(encryptThis("hello world"));





// function likes(names) {
//   if(names.length === 0){
//    return "no one likes this";
//   }else if(names.length == 1){
//    return names[0]+" likes this";
//   }else if(names.length == 2){
//    return names[0]+" and "+names[1]+" like this";
//   }else if(names.length === 3){
//    return names[0]+", "+names[1]+" and "+names[2]+" like this";
//   }else{
//    return `${names[0]}, ${Jacob} and ${names.length - 2} others like this`;
//   }
// }

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));



// function getCount(str) {
//   const vowels = ['a','i','o','e','u'];
//   let totalVowels = 0;
//   for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])) totalVowels++;
//   }
//   return totalVowels;
// }
// console.log(getCount("aaaa"));


// function backwardsPrime(start, stop) {
//    function isPrime(number) {
//       if (number <= 1) return false;
//       for (let i = 2; i < number; i++) {
//          if (number % i === 0) return false;
//       }
//       return true;
//    }

//    let finalPrimes = [];
//    for (let i = start; i <= stop; i++) {
//       if (isPrime(i)) {
//          const reverse = parseInt(i.toString().split("").reverse().join(""));
//          if( i!==reverse ){
//             if (isPrime(parseInt(i.toString().split("").reverse().join("")))) {
//             finalPrimes.push(i);
//          }
//          }
         
//       }
//    }
//    return finalPrimes;
// }
// var a = [9923, 9931, 9941, 9967]
// Test.assertSimilar(backwardsPrime(9900, 10000), a)
//no palindromes
// console.log(backwardsPrime(9900, 10000));

// let string1 = "chetan";
// let string2 = new String("chetan");
// string2 = string2.replace("c","c");



// console.log( typeof string2 );

// function sortArray(array) {
//   const allOdds = array.filter((a) => a%2!=0);
//   const sortedOdds = allOdds.sort((a,b) => a - b);
//   let i = 0;
//   for(let j = 0; j < array.length; j++){
//    if(array[j] % 2 !== 0){
//       array[j] = sortedOdds[i++];
//    }
//   }
//   return array;
// const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
// return array.map((x) => x % 2 ? odd.shift() : x);
// }
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// console.log(sortArray([5, 8, 6, 3, 4]));


// function comp(array1, array2){
//    if(array2 === null || array1 === null) return false;
//   let squaredArray = [];
//   for(let i = 0; i < array1.length - 1; i++){
//    squaredArray[i+1]= array1[i] * array1[i];
//   }
//   squaredArray[0] = array1[array1.length - 1] * array1[array1.length - 1];
//   return squaredArray.join("") === array2.join("");
// }
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// console.log(comp(null,null));

console.log(typeof 87);
