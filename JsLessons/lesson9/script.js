const person = {
    name: 'Alex',
    getName() {
        return `my name is ${this.name}`;
    }
};
const person2 = {
    name: 'Sergey',
    getName() {
        return `my name is ${this.name}`;
    }
}
const person3 = {
    name: 'Alex',
}

const people = [person3, person, person2, person3];

const p = document.querySelector('p');

for (const item of people) {
    // console.log(item.getName?.());
}

const aObject = { a: 1 };
const uniqPeople = new Set(people);
uniqPeople.add(1);
uniqPeople.delete(1);
uniqPeople.has(1);
uniqPeople.clear();
// console.log(uniqPeople);
person3.name = 'Alex Sok';
uniqPeople.add(person2);
// console.log(uniqPeople);

const restaurant = new Map();
restaurant.set('name', 'Ricco');
restaurant.set(false, 'Closed');
restaurant.set(true, 'Is open');

restaurant.set('timeToClose', 22);
const isClosed = restaurant.get('timeToClose', 22) > 11;
// console.log(`this restoraunt is ${restaurant.get(isClosed)}`);

// console.log(restaurant);
// // -----------------------
// localStorage.setItem('restaurant', 'restaurant name');