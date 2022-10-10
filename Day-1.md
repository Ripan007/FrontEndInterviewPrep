## what is JS

- scripting language , dynamic language , functional programming , synchronous language
- single threaded language , JIT compilation,client side , server side as well , weakly typed language
- Only fullStack
  -In computing, just-in-time compilation is a way of executing computer code that involves compilation during execution of a program rather than before execution. This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly.

## variables

- 3 ways
- let , var , const

## data type

- 2 typed
- primitive
- non primitive

## primitive

- number , string , boolean , symbol , undefined , null

## non primitive

- arrays , objects

## difference b/w let, const , var

- var => global scope , reDeclaration
- let , const => block scope , noDeclaration
- reInitialize => let , var

- reDeclaration
  ` var a = 23; var a = "sonam"; console.log(a);`

- reDeclaration not possible with let , const
  ` let a = 34; // wrong let a = "gg"; console.log(a);`

` const a = 34; // wrong const a = "gg"; console.log(a);`

- reInitialize

`let a = 45; a = "raj"; console.log(a);`

- const : must be initialized before declaration
  ` let a; a = 34; console.log(a);`

wrong
` const a; a = 23; console.log(a);`
no reInitialize

- we must try to avoid var keyword as we move to the latest version of the javaScript

- constant value / function / never be modified
- userName which is not modified

## JS engine

- present inside the browser / sort of environme-
- community which take care of javaScript / version handling ?
- Ecma => european computer manufacturer association

## who developed javaScript

- name Brendan Eich

- each browser have there own javaScript engine / make such javaScript engine so that website load faster / performance
- use : execute javaScript code / it help to execute JS code / file
- Chrome : v8
- FireFox : spider monkey
- explorer : chakra

## how javaScript engineWorks?

### explain the architecture of Nodejs work ?

- Execution context ?
- Global execution context(GEC) , functional execution context(FEC)

### phases of Execution context ?

- memory allocation
- code execution

### memory allocation?

- memory will be allocated to variables : undefined
- functional also gets memory allocated : actual value

### code Execution ?

- variables => actual value assign
- functions => function execution context is created for their execution => will pushed to callStack
- the movement execution is completed it remove from the callStack
- execution will come back to globalExecutionContext
- come back to original an previous execution we have

var => globalScope
let , const => script scope

const a = () =>{
}
console.log(a);
// ans : function

cannot access a before initialization
error
not defined => not in the scope
reference error

console.log(a);
const a = function(){

}

## Hoisting

- hoisting says that move all the declaration and initialization of variables and definition of functions at the top of
  -the file so that we can reduce or avoid getting reference error because of memory allocation
- whatever the variable and function you are creating inside the javaScript , try to create all of them top of the file
- why should we declare all the variable and functions top of the file ?
- ans: if you try to access any variables before declaration, initialization => it will give error
- function will execute
- thats why try to avoid creating function in variable
- task queue , event loop , setTimeOut

// work
task();
function task(){
console.los("java");
}

// wont work => reference error
task();
const task =function (){
console.los("java");
}

undefined
declare with var keyword
inside globalScope
console.log(a);
var a = 35;

reference error
console.log(a);
let a = 35;

- the variable declare using var keyword they are hoisted that means they can access before
- their initialization also , let and const are not hoisted
- they are not present inside the global scope they are present in local scope
- we cannot access them until they are initialized
- variable declare using let and const are not accessible until and unless they are initialized

`let a = 45; console.log(a); ` // hoisting

console.log(3>2>1); // false
// explanation: 3>2=>true => true > 1 => false

- temporal dead zone => happen with let and cons-
- variable => declaration , initialization
- functions => defining , invoking

## closure , lexical environment:

function outer(){
var a = 12;
function inner(){
console.log(a);
}
inner();
}

outer();

- no variable is declare inside the innerFunction / not present in
- the function execution context=> check its parent scope(lexical environment) =>
- not present in the lexical environment => not defined , undefined

- closure is basically combination of function and lexical environment ,that creates with the near its function
