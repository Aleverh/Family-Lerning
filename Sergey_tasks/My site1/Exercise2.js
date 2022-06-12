"use strict";

const button = document.querySelector(".clone-button");
const block = document.querySelector(".block-to-clone");
const wrapper = document.querySelector(".wrapper");
button.addEventListener("click", () => {
   const blockClon = block.cloneNode(true); 
   wrapper.append(blockClon);
} 
);
//--------------------------------------------------------------------
const buttonClone = document.querySelectorAll(".clone-red-block-button")[0];
// const text = document.createElement("span");
// // text.className = "text-in-buttonClone";
// text.textContent = "Cloned";
// text.style.color = "white";
buttonClone.addEventListener("click", () => {
   const blockClon1 = block.cloneNode(true);
   blockClon1.classList.add("block-to-clone-blue");

   const text = document.createElement("span");
   text.className = "text-in-buttonClone";
   text.textContent = "Cloned";
   text.style.color = "white";

   wrapper.append(blockClon1);
   blockClon1.append(text);
} 
);
//---------------------------------------------------------------------
const buttonRandom = document.createElement("button") ;
// buttonRandom.className = "button-random";
// button.button-random.style.color = "yellow";
buttonRandom.textContent = "Random Button"; 
buttonRandom.style.marginRight = 5 + "px";
buttonRandom.style.marginBottom = 5 + "px";
wrapper.append(buttonRandom);
buttonRandom.addEventListener("click", () => {
   block.style.width = 200 + "px" ;
   block.style.backgroundColor = "#" + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
  }
);
//----------------------------------------------------------------------
const buttonReset = document.createElement("button");
// buttonReset.className = "button-reset";
buttonReset.textContent = "Reset Button"; 
wrapper.append(buttonReset);
buttonReset.addEventListener("click", () => {
   block.style.width = 100 + "px";
   block.style.backgroundColor = "red";
  }
);
//-----------------------------------------------------------------------
function handlerMouse(event) {
   const textHover = document.createElement("span");
   textHover.textContent = "Hovered";
   textHover.style.backgroundColor = "blue";
   textHover.style.color = "white";
   textHover.className = "text-hover";
   block.append(textHover);
}
   block.addEventListener("mouseover", handlerMouse);
   block.addEventListener("mouseleave", () => {
   const textHoverClass = document.querySelector(".text-hover");
   textHoverClass.remove("text-hover");
});

