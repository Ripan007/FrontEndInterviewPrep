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

function a() {
    setTimeout(() => {
        console.log("function a first");
    }, 300)
}

function b() {
    console.log("function b first");
    a();
    console.log("function b last");
}

b();