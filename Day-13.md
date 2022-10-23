## _Synchronous:_

- A synchronous requests block the client until operation complete
- browser is unresponsive
- In such cases, javascript engine of the browser is blocked
- Without completing(previous) one task we cant move to another tak

## _Asychronous:_

- (AJAX web-application model)
- An Asychronous requests doesn,t block the client
- browser is responsive
- At that time ,we can perform another operations also
- In such case, javascript engine of the browser is not blocked
- We can do multiple task

---

## _Event loop:_

<img width="711" alt="image" src="https://user-images.githubusercontent.com/92440897/197393563-b11124d0-986f-40fb-a2d8-0680958738d0.png">

- Global execution context(GEC)
  - This is the default execution context in which js code start its execution when the file first loads in the browser.
  - An execution context is an abstract concept of an environment where the js code is evaluated and executed.
  - Not only setTimeout , same goes for DOM Manipulation , AJAX call , client side storage , video and audio APIs , Third party Apis etc.
- GEC => function (function => (function execution) ) => complete => popOut => setTimeout(webApi) => timeLimit (message queue) => execution context

---

## _Callback:_

- Any function that is passed as an argument is called a callback function
- A calllback is a function that is to be executed after another function has finished executing - hence the name 'callback';
- Passing a function inside another function as an argument
- callback are just the name of a convention for using javascript functions there isn't a special thing called a 'callback' in the javascript language ,it's just a convention .instead of immediately returning some result like most functions , functions that use callbacks take some time to produce a result
  - The word 'Asynchronous',aka 'async' just means 'take some time ' or 'happens in the future', not right now,usually callback are used when doing I/O , eg downloading thing,reading files , taking to databases etc
- Why callback function ?
  - javascript is an event driven language . This means that instead of waiting for a response before moving on , javascript will keep executing while listening for other events
  - callback are a way to make sure certain code doesn't execute until other code has already finished execution

---

## _Callback hell:_

- Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
- Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code
  ***
  <img src="https://miro.medium.com/max/1200/1*sOy11ZsU1ijCSjZwx8ZzGQ.jpeg"/>

---

## _Promises:_

- promises are used to handle asynchronous operations in javascript
- They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanagble code
- A promise is an object that keep track about whether a certain event has happened already or not
- Determines what happens after the event has happened
- Three stages of promises:
  - pending
  - resolve
  - reject
