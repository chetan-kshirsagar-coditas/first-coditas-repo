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


// function isValidIP(str) {
// //   if (!/^\d+\.\d+\.\d+\.\d+$/.test(str)) {
// //         return false;
// //     }
//     const octets = str.split('.');

//     for (const octet of octets) {
//         if (octet.length > 1 && octet.startsWith('0')) {
//             return false;
//         }
//         const num = Number(octet);
//         if (!(num >= 0 && num <= 255)) {
//             return false;
//         }

//         // if (!/^\d+$/.test(octet)) {
//         //     return false;
//         // }
// }}
// console.log(isValidIP('123.456.789.0'));



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



