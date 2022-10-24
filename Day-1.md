## what is JS ?

- scripting language , dynamic language , functional programming , synchronous language
- single threaded language , JIT compilation,client side , server side as well , weakly typed language
- Only fullStack
  - In computing, just-in-time compilation is a way of executing computer code that involves compilation during execution of a program rather than before execution. This may consist of source code translation but is more commonly bytecode translation to machine code, which is then executed directly.

---

## variables:

- 3 ways
  - let , var , const

---

## Data type:

- 2 typed
- primitive
- ## non primitive

## Primitive:

- number , string , boolean , symbol , undefined , null

---

## Non primitive:

- arrays , objects

---

## Difference b/w let, const , var ?

- var => global scope , reDeclaration
- let , const => block scope , noDeclaration
- reInitialize => let , var

- we must try to avoid var keyword as we move to the latest version of the javaScript

- constant never be modified / fixed

---

## JS engine

- present inside the browser / sort of environment
- community which take care of javaScript / version handling ?
  - Ecma => european computer manufacturer association

---

## who developed javaScript

- name Brendan Eich

- each browser have there own javaScript engine / make such javaScript engine so that website load faster / performance
- use : execute javaScript code / it help to execute JS code / file
- Chrome : v8
- FireFox : spider monkey
- explorer : chakra

---

## How javaScript engineWorks?

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

## Hoisting

- hoisting says that move all the declaration and initialization of variables and definition of functions at the top of the file so that we can reduce or avoid getting reference error because of memory allocation
- whatever the variable and function you are creating inside the javaScript , try to create all of them top of the file

  - why should we declare all the variable and functions top of the file ?
    - ans: if you try to access any variables before declaration, initialization => it will give error

- the variable declare using var keyword they are hoisted that means they can access before initialization
- let and const are not hoisted
- they are not present inside the global scope they are present in local scope:let , const
- we cannot access them until they are initialized : let , const
- variable declare using let and const are not accessible until and unless they are initialized

- Temporal dead zone => happen with let and const

---

## closure , lexical environment:

- no variable is declare inside the innerFunction / not present in the function execution context=> check its parent scope(lexical environment) => not present in the lexical environment => not defined , undefined

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- In other words, a closure gives you access to an outer function's scope from an inner function.
- In JavaScript, closures are created every time a function is created, at function creation time.
