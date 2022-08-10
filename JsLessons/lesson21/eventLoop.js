function multiply(a, b) {
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    const squred = square(n);
    console.log(squred)
}

printSquare(5)
// -------------------
function multiply() {
    multiply();
}
multiply()
// -------------------
console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);

console.log("Welcome to loupe.");
// -------------------
setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);
setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);
setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);
setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);
// -------------------
[1,2,3,4].forEach(function (i) {
    console.log(i);
})

function asyncForEach(arr, cb) {
    arr.forEach(function (i) {
        setTimeout(function () {
            cb(i);
        }, 0);
    })
}
asyncForEach([1,2,3,4], function (i) {
    console.log(i);
});

