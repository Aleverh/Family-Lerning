// [1,2,3,5,6,9].reduce((prev, item) => {
//     console.log(prev, item);
//     return prev + item;
// }, 0);

// [{ id: 1 }, { id: 2 }, { id: 3 }].reduce((prev, item) => {
//     console.log(prev);
//     return prev + item.id;
// }, 0);

// function createPizza(name, ingredients = [], price = 10 * 5) {
//     const ingredientsParam = Array.isArray(ingredients) ? ingredients : [];
//     console.log(price);
//     ingredientsParam.forEach(() => {});
// };
//
// console.log(createPizza('ricco', 2));

// function createPizza(pizzaInfo = {}) {
//     const { name = 'Default Name' } = pizzaInfo;
//     return name;
// }
//
// createPizza({ name: 'ricco', price: 10, descr: 'cool pizza' });
// createPizza(null);
// createPizza(undefined);

//----------------

// let pizza = 'ricco';
// function updatePizza(name) {
//     name = `this is awesome pizza ${name}`;
//     return name;
// };
//
// let secondPizza = pizza;
// secondPizza = 'second';
//
// console.log(updatePizza(pizza));
// console.log(pizza);

const pizza = {
    name: 'ricco',
    discr: 'asdasd',
}
//
// function updatePizza(pizzaInfo) {
//     pizzaInfo.name = `this is awesome pizza ${pizzaInfo.name}`;
//     // return pizzaInfo.name;
// };
//
// function addIngredients(pizzaInfo) {
//     return `this pizza ${pizzaInfo.name} has some Ingredients`
// }
// const pizzaInfo = pizza;
// pizzaInfo.discr = 'some description';
// console.log(updatePizza(pizza));
// console.log(pizza);

// -------------
// document.addEventListener('click', (event) => {});

const convertToOneWord = str => str.replace(/ /g, '').toLowerCase();
// // console.log(convertToOneWord('alex Verkhovod'));
// const upperFirstLetter = str => {
//     const [first, ...letters] = str;
//     return [first.toUpperCase(), ...letters].join('');
// }
// // console.log(upperFirstLetter('alex Verkhovod'));
//
// const transform = (str, fn) => {
//     console.log(`origin ${str}`);
//     console.log(`transformed string ${fn(str + 'form kharkiv')}`);
// }
// transform('alex verkhovod', upperFirstLetter);

// ------------
// function greet(greeting) {
//     return function (name) {
//         return `${greeting} ${name}`
//     }
// }
// const greet = greeting => name => `${greeting} ${name}`;
// const sayHello = greet('Hello');
//
// console.log(sayHello);
// console.dir(sayHello);
// console.log(sayHello('Alex'));

const person = {
    name: 'Alex',
    getInfo(second, last) {
        console.log(this);
        return `his name is ${this.name} ${second}, ${last}`;
    },
};

const foreignPerson = {
    name: 'Tomas',
}
const foreignPerson2 = {
    name: 'Tomas3',
    info: 'some info'
}

const getInfo = person.getInfo;
foreignPerson.getInfo = getInfo;

function test() {
    // console.log(this);
    const newFn = getInfo.bind(foreignPerson2, ...['Verkhovod', 'test']);
    console.log(newFn());
    console.dir(newFn);
}

console.log(new test());
// console.log(foreignPerson.getInfo());









