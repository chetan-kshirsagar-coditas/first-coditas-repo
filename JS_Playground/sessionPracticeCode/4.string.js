//fromCharCode - it converts UTF-16 to its corresponding character.
console.log(String.fromCharCode(24));

//fromCodePoint - it converts sequence of code points into string and returns it.
console.log(String.fromCodePoint(9733));

//raw - It works with raw template literals, it can process ${} but \n not.
console.log(String.raw`C:\Development\profile\about.html`);

//constructor - its present in String's prototype, used to create instances.
console.log(String.prototype.constructor);

//length - returns the string length.
console.log("Chetan Kshirsagar".length); //17

//at - returns character at that index. Accepts -ve integers that counts from back.
console.log("Chetan".at(-1)); //n

//charAt - returns the character at that index. Only +ve.
console.log("Chetan".charAt(1)); //h

//charCodeAt - returns the UTF-16 value of that character.
console.log("Chetan".charCodeAt(0)); //67
console.log("Chetan".codePointAt(0)); //67

//concat - concats two or more strings at a time.
console.log("Chetan".concat(" ","Kshirsagar")); //Chetan Kshirsagar

//endsWith - check that whether characters of string
console.log("Chetan : The SNIPER!".endsWith("SNIPER!")); //true

//includes - checks passed string (case-sensetive) is present within give string or not. true or false.
console.log("Chetan Kshirsagar".includes("Kshirsagar")); //true

//indexOf - returns the index of first occurence of that string within given string.
console.log("Chetan Kshirsagar".indexOf("Kshir")); //7

//isWellFormed() - return true if passed character is present in UTF-16 code set. Else false.
console.log("^".isWellFormed()); //true
//toWellFormed() - checks that is character of string present in UTF-16 set.

//lastIndexOf - search and return the index of last occurence of that substring within give string.
console.log("CHETANNATEHC".lastIndexOf("C")); //11

//localeCompare - No constraints for default localeCompare. Ignore anything except valid character.
console.log("CHETAN".localeCompare("che45tan")); //true

//match() and matchAll() = matches string with Regular Expressions. Return Occurences.
//MDN Example
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); 

//matchAll()
const regexp = /test/g; 
//workson whole string
const str = "test1test2";
const array = [...str.matchAll(regexp)];
console.log(array[0]);


console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]


//normalize()
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
//we have two different unicode strings.
//output is same - "Amélie, Amélie"
//name1 == name2 = false because the unicodes are not same.
//normalize helps 
const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");
//name1NFC == name2NFC -> true

//padEnd() and padStart()
//adds padding to end or start of the string if string.length is shorter than the value you provided.
console.log("Chetan".padEnd(10)); //Chetan    |
console.log("Chetan".padStart(10));//    Chetan

//repeat - repeats string number of times
console.log("Pika".repeat(5)); //PikaPikaPikaPikaPika

//replace - replace the first occurence of substring and returns new string. Doesn't modify original one.
console.log("I like To Listen.".replace("T","t")); //I like to Listen.
//replaceAll - it does replace all occurences of that substring.



//search - search a match between regular exp and string.
const myQuote = "Quotes won't work until you work!";
// Anything not a word character, whitespace or apostrophe
const regE = /[^\w\s']/g; //!
console.log(myQuote.search(regE));

//slice() - return substring and endIndex is mandatory. -ve integers can be accepted.
console.log("Kshirsagar Chetan".slice(-6)); //Chetan
//substring() - same as slice but doesn't work with -ve idexes. and start index is mandatory.

//split - splits string into parts based on assigned pattern. Returns an array.
console.log("F1,F2,F3,F3,F4".split(","));

//startsWith - check that string starts with certain sequence of characters.
console.log("Chetan Kshirsagar".startsWith("Chetan")); //true


//toLowerCase() - convert string Lower Case.
//toLocaleLowerCase() - convert string to Regional Lower Case
//toUpperCase() - convert string to Upper Case.
//toLocaleUpperCase() - convert string to Regional Upper Case

//toString() = convert string's object into proper string.
//valueOf() = extracts value from String's object, kind of same as toString() in this context.
console.log(new String("chetan").toString()); //chetan

//trim - trims whitespaces from both ends.
//trimStart - trims whitespaces from start of the string only.
//trimEnd - trims whitespaces from end of the string only.



//[Symbol.iterator]() = helps to iterate over single word and each character of it.
const quickFoxString = "The quick red fox jumped over the lazy dog's back.";
const iterator = quickFoxString[Symbol.iterator]();//setting an iterator on string
let theChar = iterator.next();

while (!theChar.done && theChar.value !== " ") { //runs until word is over or whitespace encounters.
  console.log(theChar.value); //each character.
  theChar = iterator.next(); //next character.
  //          output: "T"
  //                  "h"
  //                  "e"
}
