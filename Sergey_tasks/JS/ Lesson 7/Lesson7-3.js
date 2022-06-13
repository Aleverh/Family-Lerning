"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const button = document.querySelectorAll(".show-modal");
const parent = document.querySelector(".button-parent");
//--Открытие модального окна при нажатии на кнопки--------
parent.addEventListener("click",  verify);
function verify(item){
   let elem = item.target;
   closeModal();
}
//--Закрытие модального окна------------------------------
const buttonClose = document.querySelector(".close-modal");
buttonClose.addEventListener("click", closeModal);
//--Нажатие на клавишу ESC--------------------------------
this.addEventListener("keydown", click); 
function click(escape) {
      if(escape.keyCode === 27) closeModal();
      };
//--Нажатие на кнопку  мыши ------------------------------
overlay.addEventListener("mousedown", clickMouse)
   function clickMouse(key) {
      if(key.which === 1) closeModal();
   };
//------------------------------------------------------
function closeModal(){
   modal.classList.toggle("hidden");
   overlay.classList.toggle("hidden");
}




         
            