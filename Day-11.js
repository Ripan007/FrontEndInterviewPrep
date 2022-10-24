// synchronous //

// function a() {
//     console.log('function a start');
// }
// function b() {
//     console.log("function b start");
//     a();
//     console.log("function b end");
// }

// b();

// Asynchronous //

// function a() {
//     setTimeout(() => {
//         console.log("function a first");
//     }, 300)
// }

// function b() {
//     console.log("function b first");
//     a();
//     console.log("function b last");
// }

// b();

// callback //
// function a() {
//     setTimeout(() => {
//         console.log('function a');
//     }, 3000)

// }

// function b() {
//     console.log('function b');
// }

// a()
// b()

// modify //

// function a() {
//     setTimeout(() => {
//         console.log('function a');
//         b()
//     }, 3000)

// }

// function b() {
//     console.log('function b');
// }

// a()


// callback example //

// function personOne(friend, callFriend) {
//     setTimeout(() => {
//         console.log(`hi bro i am busy right know , i have a  call with my college ${friend} right now, i will call you later`);
//         callFriend();
//     }, 3000)

// }

// function personTwo() {
//     console.log(` how are you bro , that time i am busy thats why couldn't able to pick your call`);
// }

// personOne('sujit', personTwo);

// callback hell //

//task
// after 2s  student rollno
// after 2s name age age
// after 2s gender

// const getRollNo = () => {
//     setTimeout(() => {
//         console.log('getting roolNo');
//         let rol_no = [1, 2, 3, 4, 5];
//         console.log(rol_no);
//         setTimeout((rollNo) => {
//             const bioData = {
//                 name: "raj",
//                 age: 23
//             }
//             console.log(`my rollNo is ${rollNo}, i am ${bioData.name} and i am ${bioData.age} year old`);
//             setTimeout((name) => {
//                 bioData.gender = "male";
//                 console.log(`my rollNo is ${rollNo}, i am ${bioData.name} and i am ${bioData.age} year old and my gender is ${bioData.gender}`);
//             }, 2000, bioData.name)

//         }, 2000, rol_no[1])

//     }, 2000)
// }
// getRollNo()

// promises //    

