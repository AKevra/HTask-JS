'use strict';
// 1 вариант реализации
/*let someWord = prompt ('Введите слово?', "abba");
someWord = someWord.toUpperCase ();
function isPalindrom (someWord){
    let strLen = someWord.length;
   for (let i=0; i < strLen / 2; i++){
       if (someWord[i] !== someWord[strLen - 1 - i]){
        return false;
       }
   }
   return true;
}
if (isPalindrom (someWord)){
   console.log ("The word is a palindrome");
} else {
    console.log ("The word is NOT a palindrome");
}*/

// 2 вариант покороче
let someWord = prompt ('Введите слово?', "Abba");
someWord = someWord.toUpperCase ();
var reverseWord = someWord.split ('').reverse().join('');
let answer = reverseWord === someWord;
console.log(answer);


