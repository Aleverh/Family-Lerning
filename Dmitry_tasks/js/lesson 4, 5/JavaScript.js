'use strict';
// const name = prompt('Как тебя зовут?')
// alert(`Your name is ${name}`);
// function personName(name){
//     console.log(name)
//     return name;
// }
// personName(`${name}`)
// let a = 1, b = 1;
//
// let c = ++a; // ?
// let d = b++; // ?
// console.log(d)

// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log(true + false)
// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log("  -9  " + 5)
// console.log("  -9  " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(" \t \n" - 2)
//
// console.log(5 > 40)
// console.log("ананас" > "яблоко")
// console.log("2" > "12")
// console.log(undefined == null)
// console.log(undefined === null)
// console.log(null == "\n0\n")
// console.log(null === +"\n0\n")
// alert( null || 2 || undefined );
// alert( alert(1) || 2 || alert(3) );
// alert( 1 && null && 2 );
// alert( alert(1) && alert(2) );
// alert( null || 2 && 3 || 4 );
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Can Drive?');
//     }
// }
// const checkAge = age => >18? true : confirm('Can drive')


// const min = (a, b) => (a < b) ? a : b;


// const ask = (question, yes, no) => {
//     (confirm(question)) ?
//         yes() :
//         no();
// }
// ask("Вы согласны?", function() { alert("Вы согласились.");},
//     function (){ alert("Вы отменили выполнение.");}
//     )


// const sumTo = (n) => n * (n+1) / 2;
// console.log(sumTo(100))

// function fib(n){
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(77))
// const reverse = [1, 2, 4,]
// function numbers(){
//     reverse.reverse();
//     console.log(reverse)
// }
// numbers()
// const company = {
//     companyName: 'ASUS',
//     companyCreatedYear: 1989,
//     amountOfPeople: 400000,
//     companyHead: 'JonathanTsang',
//     calcAge: function() {
//         let today = new Date();
//         let year = today.getFullYear();
//         this.age = year - this.companyCreatedYear;
//         return this.age;
//     },
//     calcPeople: function (years) {
//         this.people = this.amountOfPeople + (years * 100)
//         return this.people
//     },
//     allInfo: function () {
//         return `${this.companyName} was created at ${this.companyCreatedYear} , has ${this.amountOfPeople} peoples, created it ${this.companyHead}.`
//     }
// };
// console.log(company.calcAge());
// console.log(company.calcPeople(20));
// console.log(company.allInfo());

// const name = document.querySelector('.name')
// const CompanyName = document.createElement('span')
// CompanyName.textContent = ' ASUS';
// name.append(CompanyName)
//
// const year = document.querySelector('.create-year')
// const createYear = document.createElement('span')
// createYear.textContent = ' 1989';
// year.append(createYear)
//
// const people = document.querySelector('.people')
// const calculatePeople = document.createElement('span')
// calculatePeople.textContent = ' 400000'
// people.append(calculatePeople)
//
// const head = document.querySelector('.company-head')
// const companyHead = document.createElement('span')
// companyHead.textContent = ' Jonathan Tsang';
// head.append(companyHead)

// let table = document.querySelector('table');
//
// for (let i = 0; i < table.rows.length; i++) {
//     let row = table.rows[i];
//     row.cells[i].style.backgroundColor = 'red';
// }