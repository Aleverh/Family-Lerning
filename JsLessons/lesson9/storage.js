'use strict';


window.addEventListener('storage', (e) => {
    console.log(e);
})
// localStorage.setItem('restaurant', 'restaurant name');
localStorage.setItem('restaurant', JSON.stringify([{ name: 'Ricco' }]));
const restaurant2 = JSON.parse(localStorage.getItem('restaurant'));
console.log(restaurant2);
