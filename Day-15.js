// one object try to access the method and property of  another object
// build in function , method , property
// how did the object getting access to the property and method
// whenever we create an object javaScript engine automatically put the hidden property into an object and attaches to that of our object
// it attaches a object to your original object and this way we are getting access to the property and method

// let arr = ["a", "b"];
// let obj = {
//     name: "a",
//     place: "random",
//     getIntro: function () {
//         console.log(this.name + "from" + this.place);
//     }
// };

// let obj2 = {
//     name: "b"
// }
// this is the object where javaScript  put in all method and functions
// arr.__proto__
// object.__proto__.
// function.__proto__.


// obj2.__proto__ = obj;

// call , apply and bind

// function burrowing
// we can borrow function from other  object and use it with the data of other  object

// let name = {
//     first: "raj",
//     last: "mohan",
    // fullName: function () {
    //     console.log(this.first + " " + this.last);
    // }
// }

// let fullName = function () {
//     console.log(this.first + " " + this.last);
// }

// let fullName = function (age, hobby) {
//     console.log(this.first + " " + this.last + " " + age + " " + hobby);
// }

// in case of arguments we don't need to mention this keyword

// let name2 = {
//     first: "janvi",
//     last: "singh"
// }


// difference between call and apply method //
// the  way we pass the arguments
// pass the argument individually comma separated => call
// we  can pass the arguments in the form of array list => apply
// pass it as second arguments as arrayList
// instead of calling the method directly , bind and return the copy of the method => bind
// bind and have a copy of it and use it latter

// let printName = fullName.bind(name, 23, "football");
// printName();
// bind method cause issue with apply method
// fullName.apply(name2, [26, "dance"]);



