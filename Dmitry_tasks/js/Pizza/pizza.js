'use strict';
const basket = document.querySelector('.basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal')
const body = document.querySelector('body')
const modalBox = document.querySelector('.modal-box')
const buy1 = document.querySelector('.buy1')
const buy2 = document.querySelector('.buy2')
const buy3 = document.querySelector('.buy3')
const buy4 = document.querySelector('.buy4')
const buttonBuy = document.querySelectorAll('.buy')
let productNow, productAfter, costNow, costAfter;
productNow = 0;
costNow = 0;
basket.addEventListener('click', (event) =>{
    modal.style.display = 'block';
    event.stopPropagation()
    });
close.addEventListener('click', () =>{
    modal.style.display = "none";
});
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape'){
        modal.style.display = "none";
        basket.style.border = "2px solid white";
    }
});
document.addEventListener('click', function (event){
    // if (event.target.className !== "modal"){
    if ((event.target).closest(".modal")){
        return;
    }
    modal.style.display = 'none';
});

buttonBuy.for.addEventListener('click', () =>{
    productNow += 1;
    productAfter = + productNow;
    document.querySelector('.number').textContent = productAfter;

    costNow += 1;
    costAfter = + costNow;
    document.querySelector('.cost').textContent = costAfter;

})