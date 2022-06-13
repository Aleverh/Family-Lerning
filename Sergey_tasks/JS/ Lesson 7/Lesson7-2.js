//--Сброс всех предыдущих значений----------------------
const buttonNewGame = document.querySelector(".btn--new");
buttonNewGame.addEventListener("click", () =>{
   const score = document.querySelectorAll(".score");
   score[0].textContent = 0;
   score[1].textContent = 0;
   clearStyle();
   clearStyle1();
})
//--Создаем генератор случайных чисел от 1 до 6 ------------
let randomNumber;
function getRandomInt() {
   randomNumber = Math.floor(6 * Math.random()) + 1;
}
//--Вывод на экран значений кубика--------------------------
function getDice(){
   let imgNew = document.querySelector(".dice");
   imgNew.style.display = "block";
   switch (randomNumber){
      case 1: imgNew.src = "Images/dice-1.png"; break;
      case 2: imgNew.src = "Images/dice-2.png"; break;
      case 3: imgNew.src = "Images/dice-3.png"; break;
      case 4: imgNew.src = "Images/dice-4.png"; break;
      case 5: imgNew.src = "Images/dice-5.png"; break;
      case 6: imgNew.src = "Images/dice-6.png"; break;
   }
}  
//Переменные - общая сумма в удачных прпытках, результат и активные игроки
let sumPlayer1 = 0;
let sumPlayer2 = 0;
let generalRezult1 = 0;
let generalRezult2 = 0;
let activPlayer1 = true;
let activPlayer2 = false;
//--Бросаем кубик--------------------------------------------
const buttonRollDice = document.querySelector(".btn--roll");
   buttonRollDice.addEventListener("click", ()=>{
      getRandomInt();
      getDice();
      rezult();
      }
   );
//--Общая сумма при удачных прпытках--------------------------
let current = document.querySelectorAll(".current-score");
function rezult(){
   if (randomNumber > 1){
      if (activPlayer1 === true) {
         sumPlayer1 += randomNumber;
         current[0].textContent = sumPlayer1;
      }
      else { 
         sumPlayer2 += randomNumber;
         current[1].textContent = sumPlayer2;
      }
   }
   else reversPlayers();
}
//--Действия при нажатии клавиши Hold ------------------------
const buttonHold = document.querySelector(".btn--hold");
buttonHold.addEventListener("click", () =>{
   let score = document.querySelectorAll(".score");
   //-----------------------------------------------------
   generalRezult1 += sumPlayer1;
   generalRezult2 += sumPlayer2;
   //-----------------------------------------------------
   if (activPlayer1 === true) {
      sumPlayer1 = 0;
      score[0].textContent = generalRezult1;
      current[0].textContent = sumPlayer1;
   }
   else {
      sumPlayer2 = 0;
      score[1].textContent = generalRezult2;
      current[1].textContent = sumPlayer2;
   }
   reversPlayers();
//--Проверка набранных баллов---------------------------------
const winner = document.querySelectorAll(".name");
if (generalRezult1 >= 10){
   const color = document.querySelector(".player--0");
   color.style.backgroundColor = "#2f2f2f";
   winner[0].style.color = "#c7365f";
   winner[0].style.fontWeight = 700;
   clearStyle();
   }
   else if (generalRezult2 >= 10){
      const color = document.querySelector(".player--1");
      color.style.backgroundColor = "#2f2f2f";
      winner[1].style.color = "#c7365f";
      winner[1].style.fontWeight = 700;
      clearStyle();
   } 
})
//---------------------------------------------------------------
function reversPlayers(){
   sumPlayer1 = sumPlayer2 = 0;
   current[0].textContent = sumPlayer1;
   current[1].textContent = sumPlayer1;
   let x = activPlayer1;
   activPlayer1 = activPlayer2;
   activPlayer2 = x; 
}
function clearStyle(){
   let img = document.querySelector(".dice");
   img.style.display = "none";
}
function clearStyle1(){
   const winner = document.querySelectorAll(".name");
   winner[0].style.color = winner[1].style.color = "#333333";
   winner[0].style.fontWeight = winner[1].style.fontWeight = 200;

   const color = document.querySelector(".player--0");
   const color1 = document.querySelector(".player--1");
   // color.style.backgroundColor = "#2f2f2f";
   // color1.style.backgroundColor = "#2f2f2f";
}