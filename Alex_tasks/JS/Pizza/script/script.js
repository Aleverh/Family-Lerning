'use strict';

const showBtn = document.querySelectorAll('.header__basket');
const closeBtn = document.querySelectorAll('.modal__close');
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
/* document.addEventListener('click', function (e) {
     const isModalOpen = modal[0].classList.contains('hidden');
    if (isModalOpen && !e.target.closest('modal') && !e.target.closest('.show-modal')) {
        closeModal()
    }
    console.log(isModalOpen);
}); */


/* addBtn.addEventListener('click', () => {
    modal[0].insertAdjacentHTML("beforeEnd", '<div class="addedItem"><img src="./img/pizza1.png" alt="" class="addedItem__img"><span class="addedItem__name">Pizza#1</span><img src="./img/minusbutton.png" alt="" class="addedItem__minusButton"><img src="./img/plusbutton.png" alt="" class="addedItem__plusButton">span class="addedItem__amount">0</span><span class="addedItem__cost">0,00$</span></div>')
});
 */
const pizzaNames = document.querySelectorAll('.card__title');
pizzaNames.forEach(element => {
    element.textContent
});

const pizzaPrices = document.querySelectorAll('.price');
pizzaPrices.forEach(element => {
    element.textContent
});

const pizzaImgs = document.querySelectorAll('.card__img');
pizzaImgs.forEach(element => {
    element.innerHTML
});

// console.log(pizzaNames,pizzaPrices,pizzaImgs);
const pizza1 = {
    name:"",
    price:"",
    img:"",
};
const pizza2 = {
    name:"",
    price:"",
    img:"",
};
const pizza3 = {
    name:"",
    price:"",
    img:"",
};
const pizza4 = {
    name:"",
    price:"",
    img:"",
};
const pizzaData = [pizza1,pizza2,pizza3,pizza4];
// console.log(pizzaData);