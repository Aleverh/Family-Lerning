'use strict';

const name = 'Alex';

const displayName = () => {
    const test = '';
    console.log(name);
    var test2 = '';
}
if (name === 'Alex') {
    var lastName = 'verkhovod';
}

// displayName();
// console.log(lastName);
// ----------
function reduce(a) {
    const b = a - 1;

    function plus(){
        const c = b + 1;
        return a + b + c;
    }
    
    return plus;
}
const res = reduce(10);
// console.log(res());
// ------------

function displayWeather() {
    console.log(this);
    // console.log(`today is ${this.weather} weather`);
}
// displayWeather();

const calcAge = () => {
    console.log(this);
    // const age = this.age || 0;
    // return 2022 - age;
}

const alex = {
    age: 24,
    calcAge() {
        // console.log(this);
        const age = this.age || 0;
        // console.log(2022 - age);
        function plus() {
            console.log(this);
            const third = () => {
                console.log(this)
            }
            third();
            // console.log(this.age + 1);
        }
        const secondPlus = () => {
            console.log(this);
            const third = () => {
                console.log(this)
            }
            third();
        }
        // plus()
        secondPlus();
    },
    plus() {
        console.log(this);
        // console.log(this.age + 1);
    }
};
// alex.calcAge();
// alex.plus();

// const newVeihecle = {
//     calcAge
// }
// const sergey = {
//     age: 40,
//     calcAge
// }


// console.log(alex);
// console.log(calcAge());
// --------------
let a = 1;
const b = a;
a = 3
console.log(b, a);

const person = {
    name: 'alex',
};
const secondPerson = person;

secondPerson.name = 'Sergey';

console.log(secondPerson, person);