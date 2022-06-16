"use strict";
let initScore = 20;
let randomNumber;
function getRandomInt() {
   randomNumber = Math.floor(20 * Math.random()) +1;
   console.log(randomNumber);
 }
 getRandomInt();
 //----------------------------------------------------
const check = document.querySelector(".check");
   check.addEventListener("click", () =>{
      const score = document.querySelector(".score");
      score.textContent = --initScore;

      const enterNumber = +document.querySelector(".guess").value;
         if(enterNumber === randomNumber){
            
            const number = document.querySelector(".number");
            number.textContent = enterNumber;
            number.style.backgroundColor = "green";
            number.style.color = "blue";
            number.style.fontSize = 6 + "rem";

            const highScore = document.querySelector(".highscore");
            highScore.textContent = 20 - initScore;
         }
         else  if (enterNumber <= randomNumber) styleLow();
               else styleMach();
   }
   )
//Перезапуск ------------------------------------------
   const again = document.querySelector(".again");
   again.addEventListener("click", () => {
      getRandomInt();
      clear();
}
) 
function clear(){
   document.querySelector(".guess").value = ""; 
   document.querySelector(".number").textContent = "?";
   document.querySelector(".number").style.color = "#333";
   document.querySelector(".number").style.fontSize = 6 + "rem";
   document.querySelector(".number").style.backgroundColor = "";
   document.querySelector(".score").textContent = 0;
   initScore = 20;
}
function styleLow(){
   document.querySelector(".number").textContent = "to low";
   document.querySelector(".number").style.color = "red";
   document.querySelector(".number").style.fontSize = 2 + "rem";
}
function styleMach(){
   document.querySelector(".number").textContent = "to mach";
   document.querySelector(".number").style.color = "red";
   document.querySelector(".number").style.fontSize = 2 + "rem";
}
