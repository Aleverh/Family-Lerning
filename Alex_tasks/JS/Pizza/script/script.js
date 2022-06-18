'use strict';

const showBtn = document.querySelectorAll('.header__basket');
const closeBtn = document.querySelectorAll('.modal__close');
const choseBtn = document.querySelectorAll('.size');
const addBtn = document.querySelectorAll('.card__button');

const modal = [document.querySelector('.modal'), document.querySelector('.overlay')];

showBtn.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        modal.forEach(item => {
            item.classList.remove('hidden')
        });
    });
});

//closing modal function
function closeModal() {
    modal.forEach(item => {
        item.classList.add('hidden')
    })
};

//close modal by pressing Esc
document.addEventListener('keyup', function (e) {
    if (e.code === 'Escape') {
        closeModal()
    }
});

//closing modal by pressing btn
closeBtn.forEach(element => {
    element.addEventListener('click', closeModal);
});

//closing modal by clicking outside modal
document.addEventListener('click', function (e) {
    if (!e.target.closest('modal') && !e.target.closest('.show-modal')) {
        closeModal()
    }
});