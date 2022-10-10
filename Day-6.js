// closures

// lexical environment

var a = 56;
function outer() {
  function inner() {
    console.log(a);
  }
}
outer();
