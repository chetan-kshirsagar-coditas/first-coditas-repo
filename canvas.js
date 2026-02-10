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

// console.log(typeof 87);


// function duplicateCount(text){
//   let map = new Map();
//   let dupCounter = 0;
//   text = text.toLowerCase();
//   for(let i = 0; i < text.length; i++){
//     if(map.has(text[i])){
//         map.set(text[i], map.get(text[i])+1);
//     }else{
//         map.set(text[i], 1);
//     }
//   }
//   for(const value of map.values()){
//     if(value > 1) dupCounter++;
//   }
//   return dupCounter;
// }
// console.log(duplicateCount("aabbcde"));


// function deleteNth(arr,n){
//   let maxOccurrence = n;
//   let map = new Map();
//   const filteredArray = [];
//   for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//         if(map.get(arr[i]) < maxOccurrence){
//             map.set(arr[i],map.get(arr[i])+1);
//             filteredArray.push(arr[i]);
//         }
//     }else{
//         map.set(arr[i],1);
//         filteredArray.push(arr[i]);
//     }
//   }
//  return filteredArray;
// }
// // [1,2,3,1,2,1,2,3] - > [1,2,3,1,2,3]
// console.log(deleteNth([1,2,3,1,2,1,2,3],2));



// function findUniq(arr) {
//   // do magic
//   let map = new Map();
//   for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }else{
//         map.set(arr[i],1);
//     }
//   }

//   for(const [key , value] of map){
//     if(value === 1) return key;
//   }
// }
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));


// function findEvenIndex(arr) {
//     let fSum = 0;
//     let sSum;
//         for(let i = 0; i < arr.length - 1; i++){
//             // const firstPart = arr.slice(0,i);
//             // const secondPart = arr.slice(i+1,arr.length);
//             // const firstPartSum = firstPart.reduce((sum ,ele) => sum + ele);
//             // const secondPartSum = secondPart.reduce((sum ,ele) => sum + ele);
//             // if(firstPartSum === secondPartSum) return i;

//             sSum = arr.slice(i+1,arr.length).reduce((sum , ele)=>sum+ele);
//             if(fSum === sSum) return i;
//             fSum += arr[i];
//         }
//         // fSum += arr[arr.length - 1];
//         if(fSum === 0){
//             return arr.length - 1;
//         }

//     return -1;
// }
// // {1,2,3,4,3,2,1}
// console.log(findEvenIndex([10,-80,10,10,15,35,20]));


// function solution(str){
//     const splitedStrArray = [];
//    if(str.length % 2 === 0){
//         for(let i = 2; i <= str.length; i += 2){
//             splitedStrArray.push(str.slice(i-2,i));
//         }
//    }else{
//         for(let i = 0; i < str.length - 2; i += 2){
//             let ch = str[i] + str[i+1]; 
//             splitedStrArray.push(ch);
//         }
//         splitedStrArray.push(str[str.length-1]+"_");
//    }
//    return splitedStrArray;
// }
// console.log(solution('abc'));

// 'abc' =>  ['ab', 'c_']


// function isValidWalk(walk) {
//     const actualWalk = [];
//     actualWalk.push(walk[0])
//     for (let i = 1; i < walk.length; i++) {
//         if (actualWalk[actualWalk.length - 1] !== walk[i]) {
//             actualWalk.push(walk[i]);
//         }
//     }
//     return actualWalk.length === 10 ? true : false;
// }
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

// function inArray(array1,array2){
//   let pureArr = [];
//   for(const str1 of array1){
//     for(const str2 of array2){
//         if(str2.includes(str1)){
//             pureArr.push(str1);
//             break;
//         }
//     }
//   }
//   return pureArr.sort();
// }
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
// console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));/



// function detectBruteForce(logs) {
//     let busted = [];

//     if (logs.length >= 3) {
//         for (let i = 0; i < logs.length; i++) {
//             logs[i] = logs[i].split(" ");
//         }
//             for(let i = 0; i < logs.length - 3; i++){
//                 // console.log("fff");

//             if( logs[i][1] === "LOGIN_FAIL" && logs[i+1][1] === "LOGIN_FAIL" && logs[i+2][1] === "LOGIN_FAIL" ){
//                 // console.log("login gf");

//                 if(logs[i][0] === logs[i+1][0]){
//                     if(logs[i+1][0] === logs[i+2][0]){
//                     busted.push(logs[i][0]);
//                     }
//                 }
//             }
//         }
//     } else {
//         return [];
//     }
//     return busted;
// }
// logs = [
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=root",
//     "10.0.0.5 LOGIN_FAIL user=test",
//     "10.0.0.5 LOGIN_SUCCESS user=test"
// ]
// detect_brute_force(logs)  # ["192.168.1.1"]
// console.log(detectBruteForce([
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=admin",
//     "192.168.1.1 LOGIN_FAIL user=root",
//     "10.0.0.5 LOGIN_FAIL user=test",
//     "10.0.0.5 LOGIN_SUCCESS user=test"
// ]));





// function cleanString(s) {
//   const orgString = [];
//   s = s.split("");
//   console.log(s);

//   for(let i of s){
//     if(i !== "#"){
//         orgString.push(i);
//     }else{
//         if(orgString.length > 0){
//             orgString.pop();
//         }
//     }
//   }
//   return orgString.join("");
// }
// "abc#d##c"      ==>  "ac"
// console.log(cleanString("abc#d##c"));



// function goodVsEvil(good, evil){
//     const goodWorth = [1, 2, 3, 3, 4, 10];
//   const evilWorth = [1, 2, 2, 2, 3, 5, 10];

//   // Calculate Good's power
//   const goodTotal = good.split(' ').reduce((sum, count, i) => sum + (count * goodWorth[i]), 0);

//   // Calculate Evil's power
//   const evilTotal = evil.split(' ').reduce((sum, count, i) => sum + (count * evilWorth[i]), 0);

//   // Compare and return specific strings
//   if (goodTotal > evilTotal) return "Battle Result: Good triumphs over Evil";
//   if (evilTotal > goodTotal) return "Battle Result: Evil eradicates all trace of Good";
//   return "Battle Result: No victor on this battle field";
// }

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));


// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10






// https://www.codewars.com/kata/5353212e5ee40d4694001114/train/javascript


// function rot13(message){
//   //your code here
//   let rotstr = "";
//   for(let i = 0; i < message.length; i++){
//     let charCode = message.charCodeAt(i);
//     if( !(charCode >= 65 && charCode <= 90)){
//         if( !(charCode >= 97 && charCode <=122)){
//             rotstr += message[i];
//             continue;
//         }
//     }
//     let start = ( message[i] < 'Z' ) ? 65 : 97;
//     let rotcode = charCode - start ; //0-25
//     rotcode = (rotcode + 13) % 26 + start;
//     rotstr += String.fromCharCode(rotcode);

//   }
//   return rotstr;
// }
// console.log(rot13("j]=%."));

// function groupAnagrams(words){
//     let temp =[... words];
//   for(let i = 0; i < temp.length; i++){
//     temp[i] = temp[i].split("").sort().join("");
//   }
//   let final = [];
//   let first = [];
//   for(let i = 0; i < words.length; i++){
//     first.push(words[i]);
//       for(let j = i + 1; j < temp.length; j++){
//         if(temp[i] === temp[j]){
//             first.push
//         }
//       }
//   }
//   return words;
// }

// ["tsar", "rat", "tar", "star", "tars", "cheese"]

// // output
// [
//   ["tsar", "star", "tars"],
//   ["rat", "tar"],
//   ["cheese"]
// ]
// console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]));



// function humanReadable (seconds) {
//     let h = "00";
//     let m = "00";
//     let s = "";
//     if(seconds >= (60*60)){
//         // console.log(Math.floor((seconds/60)/60));
//         h = Math.floor((seconds/60)/60)
//         seconds = seconds - (60 * 60 * h );
//         // console.log(h);
//         h = h.toString().padStart(2,'0');  
//     }
//     if(seconds > 59){
//         m = Math.floor(seconds/60);
//         seconds = seconds - (60 * m);
//         // console.log(m); 
//         m = m.toString().padStart(2,'0');
//     }
//     s = seconds;
//     s = s.toString().padStart(2,'0');
//     // console.log(s);

//   return `${h}:${m}:${s}`;
// }
// console.log(humanReadable(0)); //12:34:56
// console.log(45296 - 12*60);

// console.log(559980 * 60);
// console.log(9333*60);

// console.log(3599/60);//3599, '00:59:59'



// function bouncingBall(h,  bounce,  window) {
//   if( h > 0 && (bounce > 0 && bounce < 1) && window < h ){
//     let totalB = 1;
//     h = h * bounce;
//     while( h > window ){
//         // console.log(h);

//         // totalB += 2;
//         h = h * bounce;
//         totalB += 2;
//     }
//     return totalB;
//   }else{
//     return -1;
//   }
// }
// // - h = 3, bounce = 0.66, window = 1.5, result is 3

// // - h = 3, bounce = 1, window = 1.5, result is -1
// console.log(bouncingBall(3.0, 0.66, 1.5));


// function high(x) {
//     const Idx = [];
//     x = x.split(" ");
//     for (let h of x) {
//         let score = 0;
//         for (let i = 0; i < h.length; i++) {
//             score += h.charCodeAt(i) - 96;
//         }
//         Idx.push(score);
//     }
//     //  console.log(Idx);
//     let highIdx = 0;
//     let temp = Idx[0]
//     for (let i = 1; i < Idx.length; i++) {
//         if (temp < Idx[i]) {
//             temp = Idx[i];
//             highIdx = i;
//         }
//     }
//     return x[highIdx];
// }
// console.log(high('aa b'));
//'volcano'


//  function findOutlier(integers){
//     //even = true odd = false

//   const isFirstEven = integers[0] % 2 === 0;
//   const isSecondEven = integers[1] % 2 === 0;

//   let majorityParity;
//   if (isFirstEven === isSecondEven) {
//     majorityParity = isFirstEven;
//   } else {
//     majorityParity = integers[2] % 2 === 0;
//   }

//   for (let i = 0; i < integers.length; i++) {
//     if ((integers[i] % 2 === 0) !== majorityParity) {
//       return integers[i]; 
//     }
//   }


// }

//  console.log(findOutlier([2,6,8,10,3]));



// function spinWords(string) {
//     string = string.split(" ");
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].length >= 5) {
//             string[i] = string[i].split("").reverse().join("");
//         }
//     }
//     return string.join(" ");
// }
// console.log(spinWords("Hey fellow warriors"));

// function solve(n){

//   let pow = 1;
//   while( (10**pow - 1) <= n ){
//     pow++;
//   }
//   pow--;
//   let a = 10**pow - 1;
//   let b = n - a;
//   let sum = a+""+b;
//  let digSum = 0;
//   for(let i = 0; i < sum.length; i++){
//     digSum += parseInt(sum[i]);
//   }
//   return digSum;
// }
// console.log(solve(1));
// function validate(n){
//     n = n.toString().split("");
//     // console.log(n);

//   if(n.length % 2 === 0){
//     for(let i = 0; i < n.length; i += 2){
//         let num = parseInt(n[i]);
//         n[i] = (num + num) > 9 ? num - 9 : num+num;
//     }
//   }else{
//     for(let i = 1; i < n.length; i += 2){
//         let num = parseInt(n[i]);
//         n[i] = (num + num) > 9 ? num - 9 : num+num;
//     }
//   }
// //   console.log(n);

//   let sum = n.reduce((s,e)=> s+parseInt(e));
//   return sum % 10 === 0 ? true : false;
// }

// console.log(validate(123), false);


// function validate(n) {
//   let digits = n.toString().split('').map(Number); 
//   const isEvenLength = digits.length % 2 === 0;
//   for (let i = 0; i < digits.length; i++) {
//     if ((isEvenLength && i % 2 === 0) || (!isEvenLength && i % 2 !== 0)) {
//       let doubled = digits[i] * 2;
//       if (doubled > 9) {
//         doubled -= 9; 
//       }
//       digits[i] = doubled;
//     }
//   }
//   const sum = digits.reduce((a, c) => a + c, 0);
//   return sum % 10 === 0;
// // }


//     function indexEqualsValue(array) {
//     let left = 0;
//     let right = array.length - 1;
//     let result = -1;

//     while (left <= right) {
//         const mid = left + Math.floor((right - left) / 2);

//         if (array[mid] === mid) {
//         result = mid;
//         right = mid - 1; // Continue searching the left side
//         } else if (array[mid] < mid) {
//         left = mid + 1;
//         } else { // array[mid] > mid
//         right = mid - 1;
//         }
//     }

//     return result === -1 ? "-1" : result;
// }
// console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1);


// function isPrime(num) {
//   if(num < 2){
//     return false;
//   }
//   if(num == 2) return true;
//   if(num % 2 == 0) return false;
//    let sqrt = Math.sqrt(num);
//   for(let i = 2; i < sqrt; i += 2){
//     if(num % i === 0){
//         return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(73), true, "73 is prime");


// function toCamelCase(str){
//     str = str.replace(/\p{P}/gu," ").split(" ");

//     // console.log(str);
//     for(let i = 1; i < str.length; i++){
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1,str[i].length);
//     }

//     return str.join("");
// }

// console.log(toCamelCase("The-Stealth-Warrior"));

// console.log("the-trtr-tr-tr".replace(/\p{P}/gu," "));


// function firstNonRepeatingLetter(s) {
//     let og = s;
//     s = s.toLowerCase();
//   // Add your code here
//   let map = new Map();
//   for(let i = 0; i < s.length; i++){
//     if(map.has(s[i].toLowerCase())){
//         map.set(s[i],map.get(s[i])+1);
//     }else{
//         map.set(s[i],1);
//     }
//   }
// //   console.log(map);
//   let found = "";
//   for(const [ key ,value ] of map){
//     if( value === 1 ){
//         found = key;
//         break;
//     }
//   }
// //   console.log(og.includes(found));

//   if(found){
//     if(og.split("").includes(found)){
//         return found;
//     }else{
//         return found.toUpperCase();
//     }
//   }else{
//     return "";
//   }
// }
// console.log(firstNonRepeatingLetter('sTreSS')); //t


// function smallest(n) {
//     let numArr = n.toString().split("");
//     console.log(numArr);

// }
// console.log(smallest(285365), [238565, 3, 1]);
// function moveZeros(arr) {
//     let totalZeroes = 0;
//   for(let i = arr.length -1; i >= 0; i--){
//     if(arr[i] === 0){
//         arr.splice(i,1);
//         totalZeroes++;
//     }
//   }
//   while(totalZeroes >= 0){
//     arr.push(0);
//     totalZeroes--;
//   }
//   return arr;
// }

// console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));

// const email = 'chetankshirsagar87@gmail.com';
// const maskEmail = email => {
//   const indexOfAt = email.indexOf("@");
//   for(let i = 1; i < indexOfAt; i++){
//     email = email.replace(email.at(i),"*");
//   }
//   return email;
// }
// console.log(maskEmail(email));
// function digitSum(n) {
//   let sum = 0;
//   while (n > 0) {
//     let ld = n % 10;
//     sum += ld;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// function digitalRoot(n) {

//   while (n > 9) {
//     n = digitSum(n);
//   }
//   return n;
// }
// console.log(digitalRoot(456), 6);


// function countFeelings(string, array) {
//   //good luck
//   let c = 0;
//   for (let feeling of array) {
//     let isMatched = true;
//     for (let i = 0; i < feeling.length; i++) {
//       if (!string.includes(feeling.at(i))) {
//         isMatched = false;
//         break;
//       }
//     }
//     if(isMatched) c++;
//   }
//   return c;
// }
// console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief']));


// function nthSmallest(arrays, n) {
//     // return arrays;
//     let comb = arrays[0];
//     for(let i = 1; i < arrays.length; i++){
//       // comb = comb.concat(arrays[i]);
//       let arr = arrays[i];
//       for(let j = 0; j < arr.length; j++){
//         comb.push(arr[j]);
//       }
//     }

//     for(let i = 0; i < comb.length - 1; i++){
//       for(let j = 0; j < comb.length - i; j++){
//           if(comb[j] > comb[j+1]){
//             let temp = comb[j];
//             comb[j] = comb[j+1];
//             comb[j+1] = temp;
//           }
//       }
//     }

//     return comb[n-1];
//     // .sort((a, b) => a - b)[n-1]
// }
// console.log(nthSmallest([[2, 8, 12], [4, 6, 10]], 5));


// function incrementString (strng) {
//   if(!(/[0-9]/u.test(strng.at(-1)))){
//     return strng+"1";
//   }
//   let idx = -1;
//   for(let i = strng.length- 1; i >= 0; i--){
//     if(/[a-z]/u.test(strng.at(i))){
//       idx = i;
//       break;
//     }
//   }
//   // console.log(idx);

//   let digitStr = strng.slice(idx+1);
//   const len = digitStr.length;
//   digitStr = (parseInt(digitStr) + 1).toString().padStart(len,"0");
//   // console.log(digitStr);
//   return idx === -1 ? strng+"1" : strng.slice(0,idx+1) + digitStr;

// }

// console.log(incrementString("fo99obar99"));//"foobar1000"



// function productFib(prod){
//   let first = 0;
//   let second = 1;
//   let prev = first + second;//1
//   let current = 0;
//   while( (current * prev) !== prod && (current * prev) < prod){
//    current = second + prev;
//   //  console.log(current);
//    second = prev;
//    prev = current;
//   }
//   return (second * prev) === prod ? [second, prev, true] : [prev, second+prev, false];
// }
// console.log(productFib(5895), [89, 144, false]);
// console.log(55*89, 89*144);


// function alphanumeric(string){
//   string = string.trim();
//   if(string.length > 0){
//       const imposter = string.match(/[\p{P}\s+]/gu);
//       // console.log(imposter);
//       // /\p{P}/gu
//       if(imposter) return false;
//   }else{
//     return false;
//   }
//   // if(imposter) return false;
//   return true;
// }
// console.log(alphanumeric("PassW0rd"), false);


// function toUnderscore(string) {

// }
// console.log(toUnderscore('ThisIsBeautifulDay'), 'this_is_beautiful_day')


// function scramble(str1, str2) {
//   if(str1.length <  str2.length) return false;
//   let t = true;
//   let map1 = new Map();
//   let map2 = new Map();
//   for(let i = 0; i < str1.length; i++){
//     if(map1.has(str1.at(i))){
//       map1.set(str1.at(i),map1.get(str1.at(i))+1);
//     }else{
//       map1.set(str1.at(i), 1);
//     }
//   }
//   for(let i = 0; i < str2.length; i++){
//     if(map2.has(str2.at(i))){
//       map2.set(str2.at(i),map2.get(str2.at(i))+1);
//     }else{
//       map2.set(str2.at(i), 1);
//     }
//   }
//   for(let i = 0; i < str2.length; i++){
//     if(!map2.has(str2.at(i))) return false;
//     let c1 = map1.get(str2.at(i)); 
//     let c2 = map2.get(str2.at(i));
//     if( !(c1 >= c2) ) return false;
//   }
//   return true;
// }

// console.log(scramble('cedewaraaossoqqyt', 'codewars'   ));

// function solution(numbers) {
//   const min = Math.min(...numbers);
//   let gcd = 1;
//   for(let i = 2; i <= min; i++){
//     let isCommonDivisor = true;
//     for(let j = 0; j < numbers.length; j++){
//       if( numbers[j] % i !== 0 ){
//         // console.log(i , j);
//         isCommonDivisor = false;
//         break;
//       }
//     }
//     if(isCommonDivisor){
//        gcd = i;
//       // console.log( gcd);
//     }
//   }
//   return gcd * numbers.length;
// }
// console.log(solution([6, 9, 21])); //9


// function sumPairs(ints, s) {
//   let hasPair = false;
//   let map = new Map();
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = i + 1; j < ints.length; j++) {
//       if (ints[i] + ints[j] === s) {
//         map.set(ints[j], j);
//         hasPair = true;
//       }
//     }
//   }
//   let low = Infinity;
//   let bestKey;
//   for (const [key, value] of map.entries()) {
//     if (value < low) {
//       low = value;
//       bestKey = key;
//     }
//   }
//   if (hasPair) {
//     return [s - bestKey, bestKey];
//   } else {
//     return undefined;
//   }
// }

// console.log(sumPairs([0, 2, 0], 0));

// function sumPairs(ints, s) {
//   const set = new Set();
//   for (const x of ints) {
//     if (set.has(s - x)) {
//       return [s - x, x];
//     }
//     set.add(x);
//   }
//   return undefined;
// }


// function encode(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const map = new Map();
//   map.set("a",1);
//   map.set("e",2);
//   map.set("i",3);
//   map.set("o",4);
//   map.set("u",5);
//   for(let i = 0; i < string.length; i++){
//     if(vowels.includes(string.at(i))){
//       string = string.replaceAll(string.at(i),map.get(string.at(i)));
//     }
//   }
//   return string;
// }

// function decode(string) {
//   let n = ["1", "2", "3", "4", "5"];
//   const map = new Map();
//   map.set("1","a");
//   map.set("2","e");
//   map.set("3","i");
//   map.set("4","o");
//   map.set("5","u");
//   for(let i = 0; i < string.length; i++){
//     if(n.includes(string.at(i))){
//       string = string.replaceAll(string.at(i),map.get(string.at(i)));
//     }
//   }
//   return string;
// }

// console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
// console.log(decode('h2ll4'), 'hello');

// function isValidIP(str) {
//  const numbers = str.split(".");
//  if(!(numbers.length === 4)) return false;
//  console.log(numbers);

//  for(let num of numbers){
//     //false for leading zeroes

//     if(num.length === 0) return false;
//     if(num.length > 1 && num.startsWith("0")){
//       return false;
//     }
//     let t = num.match(/[^0-9]/gu);
//     if(t) return false;

//     num = parseInt(num);

//     console.log(num);

//     if( !(num>=0 && num<=255) ) return false;
//  }
//  return true;
// }
// console.log(isValidIP('\n1.2.3.4'), false);

//     assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
//     assert.strictEqual(isValidIP(' 1.2.3.4'       ), false);
//     assert.strictEqual(isValidIP('1.2.3.4 '       ), false);
//     assert.strictEqual(isValidIP('12.34.56.-7'    ), false);
//     assert.strictEqual(isValidIP('1.2.3.4\n'      ), false);
//     assert.strictEqual(isValidIP('\n1.2.3.4'      ), false);


// function pigIt(str){
//   return str.match(/[a-zA-z]*/gu);
// }
// console.log(pigIt('Pig ! ! latin is cool !'),'igPay atinlay siay oolcay');


// function towerBuilder(nFloors) {
//   // build here
//   const tower = [];
//   let i = 1;
//   for(let n = nFloors - 1; n >= 0; n--){
//     let oneFloor = "";
//     for(let firstSpaces = n; firstSpaces >= 1; firstSpaces--){
//       oneFloor += " ";
//     }
//     for(let starts = i; starts >= 1; starts--){
//       oneFloor += "*";
//     }
//     for(let secondSpaces = n; secondSpaces >= 1; secondSpaces--){
//       oneFloor += " ";
//     }
//     tower.push(oneFloor);
//     // console.log(oneFloor);

//     i += 2;
//   }
//   return tower;
// }
// console.log(towerBuilder(3));/

//["  *  "," *** ","*****"]


// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// function wave(str){
//   let wave = [];
//   str = str.split("");
//   // console.log(str);

//   for(let i = 0; i < str.length; i++){
//     if(!(str[i] === " ")){
//       let temp = str.slice();
//       temp[i] = temp[i].toUpperCase();
//       // console.log(temp.join(""));
//       wave.push(temp.join(""));
//     }
//   }

//   return wave;
// }
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]
// console.log(wave(" s p a c e s "));

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08



// function highestRank(arr) {
//   let frequencyMap = new Map();
//   for (let index = 0; index < arr.length; index++) {
//     if (frequencyMap.has(arr[index])) {
//       frequencyMap.set(arr[index], frequencyMap.get(arr[index]) + 1);
//     } else {
//       frequencyMap.set(arr[index], 1);
//     }
//   }
//   //  return frequencyMap;
//   let mostFrequent = 0;
//   let largerMostFrequent = -Infinity;
//   for(const [key, value] of frequencyMap){
//     if(value > mostFrequent){
//       mostFrequent = value;
//       largerMostFrequent = key;
//     }else if(value === mostFrequent){
//       largerMostFrequent = Math.max(largerMostFrequent, key);
//     }
//   }
//  return largerMostFrequent;
// }
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));



// function multiplicationTable(size) {
//   const multiplicationTableLol = [];
//   for(let number = 1; number <= size; number++){
//     const shiii = [];
//     for(let element = 1; element <= size; element++){
//       shiii.push(number * element);
//     }
//     multiplicationTableLol.push(shiii);
//   }
//   return multiplicationTableLol;
// }

// console.log(multiplicationTable(3));
// console.log("Chetan Kshirsagar");
