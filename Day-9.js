const counter = document.querySelector("#counter");
let count = 0;

function changeCounter(button) {
  if (button === plus) {
    count += 1;
  }
  counter.innerHTML = count;
}