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

## _Callback hell:_
