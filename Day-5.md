### reverse a given string:

      var name = "codewithme";
      var reverse = name.split("").reverse().join("");
      console.log(reverse);

---

#### Find the sum of all elements/numbers of a given array?

- without using loop

            var arr = [1, 2, 6, 7];
            var sum = arr.reduce((a, i) => {
            return a + i;
            });
            console.log(sum);

- using loop

       var arr = [3, 6, 7, 8];
       let sum = 0;
       for (let i in arr) {
       sum += arr[i];

       console.log(sum);

---

Link for practice : https://www.fullstacktutorials.com/interviews/javascript-coding-questions-answers-6.html:thinking:
