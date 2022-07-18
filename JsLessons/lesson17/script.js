// const User = function (name, password) {
//
// }
// function User(name, password) {
//     this.name = name;
//     this.password = password;
//     this.companyV2 = 'Alex comp';
// // DO NOT DO THIS
// //     this.getFullName = function () {
// //         return `his name is ${this.name}`
// //     }
// }

// User.prototype.getFullName = function () {
//     return `his name is ${this.name}`
// }
//
// const alex = new User('Alex', 'learn');
// const dima = new User('dima', 'learn');
// const sergey = new User('sergey', 'learn');

// console.log(alex.getFullName(), dima.getFullName(), sergey);

// console.log(User.prototype === alex.__proto__);

// User.prototype.company = 'Alex comp';
// console.log(Object.prototype);
//
// const sergey = new User('sergey', 'learn');
// console.log(sergey.company, sergey.getFullName());
// console.log(sergey.hasOwnProperty('company'), sergey.hasOwnProperty('name'));
// console.log(User.prototype.isPrototypeOf(sergey), sergey.companyV2);
//
// Array.prototype.uniq = function () {
//     return [...new Set(this)];
// }

// --------------------------
// const User = class  {
//
// }
// class UserCl {
//     movements = [];
//     companyV2 = 'Alex comp'
//     test;
//
//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//     }
//
//     getFullName() {
//         return `his name is ${this.name}`
//     }
//
//     set setPassword(pass) {
//         if (pass.length > 3) {
//             this.password = pass;
//         }
//         else {
//             console.log('enter correct pass')
//         }
//     }
// }
// User.prototype.getFullName = function () {
//     return `his name is ${this.name}`
// }
// User.prototype.companyV2 = 'Alex comp';
// const alex = new UserCl('Alex', 1111);
// const sergey = new UserCl('Dmitriy', 1111);
//
// console.log(alex);
// alex.setPassword = '121231asd';
// console.log(alex.password);
// ------------------
// const obj = {
//     name: 'test',
//     birthYear: 1998,
//
//     getYear() {
//         return 2022
//     },
//
//     get year() {
//         return this.getYear() - this.birthYear
//     },
//
//     set fullName(name) {
//         if (name.length > 3)
//             this.name = name;
//         else {
//             console.log('enter more symbols')
//         }
//     }
// }
// console.log(obj.year);
// console.log(obj.name);
// obj.fullName = 'nahgfdfgf';
// console.log(obj.name);
// ------------------------

// function User(name, password) {
//     this.name = name;
//     this.password = password;
//     this.companyV2 = 'Alex comp';
// }
// User.prototype.getFullName = function () {
//     return `his name is ${this.name}`
// }
//
// function Admin(name, password, restriction) {
//     this.restriction = restriction;
//     User.call(this, name, password);
// }
// Admin.prototype = Object.create(User.prototype);
//
// console.dir(User);
// const admin = new Admin('dmitriy', 111, [123,123,123]);
// // console.log(admin.getFullName());
// console.log(admin);

class User {
    #password;
    movements = [];
    constructor(name, password) {
        this.name = name;
        this.#password = password;

    }

    // password() {
    //     return this.#password;
    // }

    deposit(value) {
        this.movements.push(value);
        return this;
    }
    withdrawal(value) {
        this.movements.push(-value);
        return this;
    }

    getYear() {
        console.log(this.#password);
        return 2022;
    }

    set password(pass) {
        this.#password = pass;
    }

    static getInfo() {
        return 'some info'
    }
}
//
// class Admin extends User {
//     constructor(name, password, restriction) {
//         super(name, password);
//         this.restriction = restriction;
//     }
//
//     // getYear() {
//     //     return 2025;
//     // }
// }
//
// const admin = new Admin('dmitriy', 111, [123,123,123]);
// console.log(admin.getYear());
// admin.password = 2222;
// console.log(admin);
// ======================
// const arr = new Array(2,3,5)
// console.log(arr.from, Array.from([]), User.getInfo());
const user = new User();
console.log(user.movements);
user.deposit(200);
user.deposit(100);
user.deposit(50);
user.withdrawal(50);

user.deposit(200).deposit(100).deposit(50).withdrawal(50);
console.log(user.movements);
