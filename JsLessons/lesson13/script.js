// console.log(Number(10));
// console.log(Number(10.2));
//
// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('109'), +'1002px');
// console.log(Number.parseInt('1002.19px2'));
// console.log(Number.parseFloat('1002.19px2'));
//
// console.log(Number.parseInt(1000.3));
//---------------
// console.log(Number.isFinite(10));
// console.log(Number.isFinite('10'));
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10));
// console.log(Number.isInteger(10.0));
// console.log(Number.isNaN(10));
// console.log(Number.isNaN(NaN));
// console.log(Number.isInteger(10.01));
//
// // const isDouble = num => !Number.isInteger(num);
//
// console.log(isDouble(10.0));

//------------------
// console.log(Math.sqrt(25));
// console.log(16 ** (1 / 4));
// console.log(Math.PI);
//
// const array = [1,5,8,7645,2,-3,6];
// console.log(Math.max(...array));
// console.log(Math.min(...array));
// console.log(Math.min('a', 'b'));
// console.log(Math.trunc(-101.54));
// console.log(Math.trunc(-101.14));
//
// console.log(Math.round(23.1));
// console.log(Math.round(23.6));

// console.log(Math.ceil(23.1));
// console.log(Math.ceil(23.6));
//
// console.log(Math.floor(23.1));
// console.log(Math.floor(23.6));
//
//
// console.log(Math.floor(-23.3));
// console.log(Math.ceil(-23.3));
//
// console.log(Math.floor(Math.random() * 5) + 1);

// console.log((Math.random() * 5).toFixed(2));
// console.log(Number(10).toFixed(2));
//
// console.log(5 % 2);
// console.log(8 % 3);
//
// console.log(1_000_0.0_0_1);
// console.log(Number.parseInt('1_000_000'));
//-------------
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER * 425);
// console.log(BigInt(101010));
// console.log(9241241424123534231456532465342567643n * 100123412365342534n);
// console.log(Math.floor(100123412365342534n));

// ----------------------
// console.log(9241241424123534231456532465342567643n * 10n);

// setTimeout(() => {
//     console.log(1000);
// }, 3000);
let counter = 0;
const interval = setInterval(test, 1000);

function test() {
    console.log(counter);
    counter++

    if (counter >= 5) {
        clearInterval(interval)
        
    }
}

