- Object Oriented JavaScript (OOP)

- How JavaScript runs behind the screen

1. What are the new JS features in ES6?

- https://github.com/lukehoban/es6features

2. JS is sync or Async?

- JavaScript is always synchronous and single-threaded. If you’re executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

3. What is the difference between Sync and Async in JS?

- Asynchronous code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting.

- Link — https://rowanmanning.com/posts/javascript-for-beginners-async/

4. How to optimize performance of JS code?

- What is memoization. Implement JS code for memoization.
- What is bind? Implement pollyfill for bind.
- Write polyfill for : map, reduce, filter, promise
- What are pure functions?
- What is the difference between a shim and a polyfill?

- https://2ality.com/2011/12/shim-vs-polyfill.html

5. What is IIFEs (Immediately Invoked Function Expressions)?
   What is Coercion in JavaScript?

- https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

6. What is the definition of a Higher-Order Function?
7. When would you use the bind function?
8. What is Currying?

- https://www.tutorialspoint.com/what-is-currying-in-javascript

9. Can you give an example of a curry function and why this syntax offers an advantage?
10. Explain what is Hoisting in Javascript?

- JavaScript Hoisting refers to the process whereby the compiler allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.

11. Explain the Prototype Design Pattern?
12. Compare Async/Await and Generators usage to achive same functionality?

- https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950

13. What is the difference between the await keyword and the yield keyword?
14. Is it possible to reset an ECMAScript 6 generator to its initial state?
15. How to deep-freeze object in JavaScript?
16. We can use an Object.freeze() method provided by JavaScript to prevent the addition of new properties with updating and deleting of existing properties.

Link — https://www.geeksforgeeks.org/how-to-deep-freeze-an-object-in-javascript/

17. Is JavaScript a pass-by-reference or pass-by-value language?

- JavaScript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).However, when a variable refers to an object which includes array, the value is the reference to the object.

https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c

18.What is JIT and Event Loop in JS?
The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.

Link — https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

19. What are closures in JS?
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Question Link — https://dev.to/levimeahan/closures-scope-and-the-settimeout-for-loop-question-5bl6

- https://coderbyte.com/algorithm/3-common-javascript-closure-questions#

20. What is the benefit of using Arrow functions?
21. Array and String Methods in JS along with their Parameters?
22. What is the difference between windows.onload vs onDocumentReady?
23. Difference between ForEach() and map()?
24. What are callback functions in JS?
25. What is callback hell?
26. What are promises and how does promises work?
27. Difference between event bubbling and event capturing?
28. Output for 2+‘2’ and 2-‘2’ in js?
    https://www.toptal.com/javascript/interview-questions

https://www.interviewbit.com/javascript-interview-questions/#coding-problems

34. Difference between set and map methods in JS?

- Map is a collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object it returns the key,value pair in the same order as inserted

- The JavaScript map set() method is used to add or updates an element to map object with the particular key-value pair. Each value must have a unique key.

35. Software Development Models — KISS, SOLID, POC, DRY, MVP etc

36. What is debouncing and throttling in javascript?

37. Difference between SetTimeout and SetInterval in JS?

38. How to use ClearInterval & ClearTimeout?

39. Why let and const were introduced in JS?

40. What is the difference between NaN and undefined?

41. Read on Logical AND (&&) andLogical OR (||) -> Short-circuit evaluation

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

# Please read below topics in the sequence mentioned below:

1. ‘this’ Keyword

Link — https://www.w3schools.com/js/js_this.asp

2. Call, Apply and Bind methods and their use with ‘this’ keyword

3. Closures in JS

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Link — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

4. Currying in JS

https://www.tutorialspoint.com/what-is-currying-in-javascript

5. Write code for currying for sum(1)(2)(3) and sum (1,2,3)

6. Why do we need Bind, call and apply?

# Important Topics:

1. Advanced JavaScript Practices

2. Object Oriented Programming

3. Functional Programming

4. Scope and Execution Context

5. Inheritance + Prototype Chain

6. Latest features: ES6, ES7, ES8, ES9, ES10, ES2020

7. Closures

8. Asynchronous JavaScript + Event Loop

9. JavaScript Modules

10. `this` keyword

11. JavaScript Engine and Runtime

12. Error Handling

13. Stack Overflow

14. Memory Leaks

15. Composition vs Inheritance

16. Type Coersion

17. Pass By Reference vs Pass by Value

18. Higher Order Functions

19. IIFE

20. .call(), .apply(), .bind()

21. Interpreter/ Compiler/ JIT Compiler

22. Garbage Collection

23. Hoisting

24. JavaScript best practices

# Array Methods: https://www.freecodecamp.org/news/the-javascript-array-handbook/

#LinkedIn Skill Assessment Quizzes — https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes

Promise Example:

function GetUserDetails() {

return new Promise(function(resolve, reject) {

console.log(“Fetching data, Please wait…..”);

setTimeout(() => {

fetch(“https://jsonplaceholder.typicode.com/todos/1")

.then(response => response.json())

// .then(json => console.log(json))

// .catch(error => console.log(error));

.then(json => resolve(json))

.catch(error => reject(error));

}, 3000);

});

}
