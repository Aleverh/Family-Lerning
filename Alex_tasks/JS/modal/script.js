'use strict';

const showBtn = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelectorAll('.close-modal');

const modal = [ document.querySelector('.modal'),document.querySelector('.overlay')];

showBtn.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        modal.forEach(item => {
            item.classList.remove('hidden')
        });
    });
});
//closing modal function
function closeModal(){
    modal.forEach(item => {
        item.classList.add('hidden')
    })
};
//close modal by pressing Esc
document.addEventListener('keyup', function (e) {
    if(e.code === 'Escape') {
        closeModal()
    }
});
//closing modal by pressing btn
closeBtn.forEach(element => {
    element.addEventListener('click', () => closeModal());
});

/* document.addEventListener('click', () => {

    if(){
        closeModal()
    }
}); */

