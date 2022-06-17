"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const button = document.querySelectorAll(".show-modal");
const parent = document.querySelector(".button-parent");

//--Открытие модального окна при нажатии на кнопки--------
parent.addEventListener("click", function (event){
   // if(event.target.closest(".show-modal")) 
   if(event.target.closest("button")) 
   // if(event.target.closest(".show-modal" && "button")) 
   // if(event.target.closest(".show-modal" && ".show-modal1" || ".show-modal2")) 
   closeModal();
});

//--Закрытие модального окна------------------------------
const buttonClose = document.querySelector(".close-modal");
buttonClose.addEventListener("click", closeModal);

//--Нажатие на клавишу ESC--------------------------------
document.addEventListener("keydown", clickEscape); 
function clickEscape(escape) {
   if(escape.keyCode === 27){
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
   }
   closeModal();
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




         
            