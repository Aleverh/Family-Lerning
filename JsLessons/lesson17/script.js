// const User = function (name, password) {
//
// }
function User(name, password) {
    this.name = name;
    this.password = password;
    this.companyV2 = 'Alex comp';
// DO NOT DO THIS
//     this.getFullName = function () {
//         return `his name is ${this.name}`
//     }
}

User.prototype.getFullName = function () {
    return `his name is ${this.name}`
}
//
// const alex = new User('Alex', 'learn');
// const dima = new User('dima', 'learn');
// const sergey = new User('sergey', 'learn');

// console.log(alex.getFullName(), dima.getFullName(), sergey);

// console.log(User.prototype === alex.__proto__);

User.prototype.company = 'Alex comp';
console.log(Object.prototype);

const sergey = new User('sergey', 'learn');
console.log(sergey.company, sergey.getFullName());
console.log(sergey.hasOwnProperty('company'), sergey.hasOwnProperty('name'));
console.log(User.prototype.isPrototypeOf(sergey), sergey.companyV2);

Array.prototype.uniq = function () {
    return [...new Set(this)];
}
