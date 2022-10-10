// questions
//  What is js.
// 2 - What are the different data types present in javascript?
// 3 - let vs Var vs Const.
// 4 - Explain Hoisting in javascript.
// 5 - What are closures in JS.
// 6- Find sum of the digits from a given number.
// 7 - Reverse the array without using any loops.

// calculate the sum of number

// const num = 5;
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log("the calculated sum is " + "" + sum);

// // done

// // reverse a string without using loop
// // reverse a string with build-in-functions
// // before reverse we need to turn the string into an array

// function reverseString(str) {
//   // return a new Array
//   var splitString = str.split("");
//   // reverse the new created array
//   var reverseArray = splitString.reverse();
//   // join all elements of the array into string
//   var joinArray = reverseArray.join("");
//   console.log(joinArray);
// }

// reverseString("hello");

// functions are first class citizen in  javaScript
// function assign as ver , return , parameter

// argument => passed during calling
// parameter => define during declaration

// callback => when a function is passed as a parameter to the another function and call inside  that function

// function x(fp) {
//   fp();
// }
// function y() {
//   console.log("inside y");
// }
// x(y);
// print inside y

function x(fp) {
  console.log("inside x ");
  fp();
}
function y() {
  console.log("inside y");
}
x(y);
