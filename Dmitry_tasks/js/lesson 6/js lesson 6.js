'use strict';

const button = document.querySelector('.block-to-clone');
const cloneButton = button.cloneNode(true);
const wrapper = document.querySelector('.wrapper');
// wrapper.append(cloneButton);


const cloneButtonRed = button.cloneNode(true);
cloneButtonRed.style.backgroundColor = 'green';

const text = document.createElement('span')
text.textContent = 'Cloned';
text.style.color = 'white';
cloneButtonRed.appendChild(text);

const testButton = document.querySelector('.button-random');

testButton.addEventListener('click', randomColor);
function randomColor(){
    button.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    button.style.width = 200 + 'px';
}
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    button.style.backgroundColor = 'red';
    button.style.width = 100 + 'px';
});
button.addEventListener('mouseover', Hover);
    function Hover(){
    const hovered = document.createElement('span');
    hovered.className = 'hovered';
    hovered.textContent = 'Hovered';
    hovered.style.color = 'white';
    button.style.backgroundColor = 'blue';
    button.append(hovered);
}
button.addEventListener('mouseout', () =>{
    const remHover = document.querySelector('.hovered')
    remHover.remove();
    button.style.backgroundColor = 'red'
});






