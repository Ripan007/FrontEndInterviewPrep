# JS INTERVIEW QUESTION:

## Explain “this” keyword

- The value of "this" keyword gets decided at the time of execution, you dont assign any value to "this" like any other usual variable.

        In most cases, the value of "this" keyword gets determined when the function is called in runtime.

            var user = {
                name : "John David",
                age : 25,
                displayInfo : function (){
                    console.log(this.name + " is "+ this.age + " years old.");
                }
            }

         John David is 25 years old

## Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

     The value of "this" keyword gets decided at the time of execution, you dont assign any value to "this" like any other usual variable.

        In most cases, the value of "this" keyword gets determined when the function is called in runtime.

            var user = {
                name : "John David",
                age : 25,
                displayInfo : function (){
                    console.log(this.name + " is "+ this.age + " years old.");
                }
            }

         John David is 25 years old

## Explain passed by value and passed by reference</h2>

     In case of "pass by value", when you pass any variable to the function and inside this function when you change or modify the value of this variable then it will not change the value of the variable outside the function. Because in pass by value case, inside function new variable gets created which is pointing to different memory location.
        <br>
        In most cases, the value of "this" keyword gets determined when the function is called in runtime.
        <pre>
            let num = 10

            function double (n){
                return 2*n
            }

            let a = double(num);
            console.log(a);

            console.log(num)

            <span>Output : 20 10</span>
        </pre>
    </h4>
    <h4>In case of "pass by value", when you pass any variable to the function and inside this function when you change or modify the value of this variable then it will not change the value of the variable outside the function. Because in pass by value case, inside function new variable gets created which is pointing to different memory location.
        <br>
        In most cases, the value of "this" keyword gets determined when the function is called in runtime.
        <pre>
            let num = 10

            function double (n){
                return 2*n
            }

            let a = double(num);
            console.log(a);

            console.log(num)

            <span>Output : 20 10</span>
        </pre>
    </h4>

//call, apply, bind in JS are the different ways of executing the function . This specific function can take different objects while execution, the properties of the objects in this function will be accessed by using "this" keyword

// var user = {
// name : "John David",
// age : 25,
// displayInfo : function (){
// console.log(this.name + " is "+ this.age + " years old.");
// }
// }

// user.displayInfo()

// var user2={
// name : "Karthik",
// salary : 25000
// }

// function employeeDetails(greet){
// console.log(greet, this.name, this.salary);
// }

let num = 10;

function double(n) {
return 2 \* n;
}

let a = double(num);
console.log(a);

console.log(num);
