// reDeclaration
// var a = 23;
// var a = "sonam";
// console.log(a);

//      reDeclaration not possible with let, const
//     let a = 34; // wrong let a = "gg"; 
// console.log(a);

// const a = 34;
 // wrong const a = "gg"; 
// console.log(a);

// reInitialize

// let a = 45;
// a = "raj";
// console.log(a);

// const : must be initialized before declaration
// let a; a = 34; console.log(a);

// wrong
// const a;
// a = 23;
// console.log(a);

// no reInitialize

// var => globalScope
// let, const => script scope

// const a = () => {
// }
// console.log(a);
 // ans : function

// cannot access a before initialization
// error
// not defined => not in the scope
// reference error

// console.log(a);
// const a = function () {

// }

// work
// task();
// function task() {
//     console.los("java");
// }

// wont work => reference error
// task();
// const task = function () {
//     console.los("java");
// }

// undefined
// declare with var keyword
// inside globalScope
// console.log(a);
// var a = 35;

// reference error
// console.log(a);
// let a = 35;

// let a = 45; console.log(a); 
 // hoisting

// console.log(3 > 2 > 1); // false
// explanation: 3>2=>true => true > 1 => false

// closure , lexical environment

// function outer() {
//     var a = 12;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }

// outer();

