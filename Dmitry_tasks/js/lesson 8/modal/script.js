'use strict';
const buttons = document.querySelector('.buttons')
const overlay = document.querySelector('.overlay')
const hidden = document.querySelector('.hidden')
const modal = document.querySelector('.modal')
buttons.addEventListener("click",  (event) =>{
    let target = event.target;
    if(target.className != "show-modal") {
        return;
    }
    modal.style.display = 'block';
    overlay.style.display = 'block';

});
const close = document.querySelector('.close-modal')
close.addEventListener('click', () =>{
    modal.style.display = 'none';
    overlay.style.display = 'none';
});
 document.addEventListener('keydown', function (e){
     if(e.key === 'Escape'){
         modal.style.display = 'none'
         overlay.style.display = 'none'
     }
 });
 overlay.addEventListener('click', function (e){
     if (e.target.className !== "modal") {
         modal.style.display = 'none'
         overlay.style.display = 'none'
     }
 });
