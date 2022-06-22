const firstArray = [1,2,3,4,65,7,2,4, 8,9, 0];
const objectArray = [
    { id: 3, name: 'name 3' },
    { id: 1, name: 'name 1' },
    { id: 2, name: 'name 2' },
    { id: 4, name: 'name 5' },
    { id: 1, name: 'name 10' },
];
const pazzas = [
    {
        pizzaId: 1,
        pizzaName: 'caprichoza',
        price: 10,
    }
];

// console.log(firstArray.slice(2,4));
// console.log(firstArray.slice(-1));
// console.log(firstArray);

// console.log(firstArray.splice(2, 0, 30, 31));
// console.log(firstArray);

// console.log(firstArray.reverse());
// console.log([...firstArray].reverse());
// console.log(firstArray);

// const secondArray = [100, 99, 98];
// console.log(firstArray.concat(secondArray));
// console.log(secondArray.concat(firstArray));
// console.log([...firstArray, ...secondArray]);
// console.log(firstArray);

// console.log('asddfdfaa'.split(''))
// console.log(firstArray.join(' - '))

// console.log(firstArray.at(0));
// console.log(firstArray[0]);
// console.log(firstArray[firstArray.length - 1]);
// console.log(firstArray.at(-2));

// for(let item = 0; item < firstArray.length; item++) {
//     if (firstArray[item] > 5) {
//         console.log(firstArray[item], '-----basic');
//     }
// }
//
// for(const item of firstArray) {
//     if (item > 5) {
//         console.log(item);
//     }
// }
//
// for(const [index, item] of firstArray.entries()) {
//     if (item > 5) {
//         console.log(item, index);
//     }
// }

// firstArray.forEach((item, index) => {
//     if (item > 5) {
//         console.log(item, '----forEach', index);
//     }
// });
//
// console.log(firstArray);
// const newArr = firstArray.map((item, index)=> {
//     // console.log(index);
//     return item ? item + 'test' : 'default'
// });
// console.log(newArr);
// console.log(firstArray);
//
// console.log(firstArray.filter(item => item > 5));
// console.log(firstArray);

// const max = firstArray.reduce((acc, item) => acc > item ? acc : item, firstArray[0]);
// console.log(max);

// console.log(objectArray.find(item => item.id === 1));
// console.log(objectArray.find(item => item.id === 10));
//
// console.log(objectArray.every(item => item.id > 1));
// console.log(objectArray.some(item => item.id > 1));

// const thirdArray = [...firstArray, [41,12, [41,12]]];
// console.log(thirdArray.flat(2));

console.log(objectArray.sort((a, b) => {
    console.log(a, b);
    return a.id < b.id ? 1 : -1;
}));
