'use strict';

// const block = document.querySelector('.test');
// const wrapper = document.querySelector('.wrapper');
//
// const newDiv = document.createElement('div');
// newDiv.className = 'div-to-test';
//
// // block.remove();
// newDiv.append(block);
// wrapper.append(newDiv);
//
// const parBefore = document.createElement('p');
// parBefore.textContent = 'before block';
//
//
// const parAfter = document.createElement('p');
// parAfter.textContent = 'after block';
//
// const par = document.createElement('p');
// par.style.borderRadius = '5px';
// par.style.backgroundColor = '#c4c4c4';
// par.textContent = 'second text';
// par.className = 'test_par';
// const parZero = document.createElement('p');
// parZero.textContent = 'zero element';
//
//
// const span = document.createElement('span');
// span.textContent = ' red text';
// span.style.color = 'red';
// span.style.color = '';

// const clonedSpan = span.cloneNode(true);
// span.style.color = 'blue';
//
// par.append(clonedSpan);
// // console.log(par);
// par.append(span);
// // adding elements
// block.before(parBefore);
// block.after(parAfter);
// block.append(par);
// block.prepend(parZero);
//
//
// const margin = getComputedStyle(par).marginLeft;
// par.style.marginLeft
// console.log(margin);

// ------------------------------

// const block = document.querySelector('.parentList');
// block.classList.toggle('hide');
// block.classList.toggle('hide');
//
// for (let item of block.classList) {
//     console.log(item);
// }
// console.log(block.classList);

// ------------------------------

const button = document.querySelector('button');
const listener = document.getElementById('listener');
function log() {
    console.log('more code 2');
}
// button.onclick = log;
// button.onclick = () => {
//     console.log('more code');
// };


function handlerMouse(event) {
    console.log(event);
    const par = document.createElement('p');
    par.style.borderRadius = '5px';
    par.style.backgroundColor = '#c4c4c4';
    par.textContent = 'second text';
    par.className = 'test_par';
    document.body.append(par);

}
button.addEventListener('mouseenter', handlerMouse);
button.addEventListener('mouseleave', () => {

    const par = document.querySelector('.test_par');
    par.remove();
});

button.addEventListener('click', log);

listener.addEventListener('click', () => {
    button.removeEventListener('mouseenter', handlerMouse);
})
document.body.addEventListener('keypress', (event) => {
    console.log(event.key);
})