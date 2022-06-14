
const buttonNewGame = document.querySelector(".btn--new");
const buttonRollDice = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");
const score = document.querySelectorAll(".score");
const current = document.querySelectorAll(".current-score");
const imgNew = document.querySelector(".dice");
const winner = document.querySelector(".player--0");
const winner1 = document.querySelector(".player--1");
//Переменные - общая сумма в удачных прпытках, результат и активные игроки
let sumPlayer1 = 0;
let sumPlayer2 = 0;
let generalResult1;
let generalResult2;
let activePlayer = 0;
let randomNumber;
//--Сброс всех предыдущих значений------------------------
buttonNewGame.addEventListener("click", clear);
function clear(){
   imgNew.style.display = "none";  
   score[0].textContent = 0;
   score[1].textContent = 0;
   current[0].textContent = 0;
   current[1].textContent = 0;
   generalResult1 = 0;
   generalResult2 = 0;
   winner.classList.remove("player--winner");
   winner1.classList.remove("player--winner");
   // player1.classList.toggle("player--active");
   // player2.classList.remove("player--active");
   activePlayer = 0;
}
//--Вывод на экран значений кубика--------------------------
function getDice(){
   imgNew.style.display = "block";
   imgNew.src = `Images/dice-${randomNumber}.png`;
}
//--Общая сумма при удачных попытках--------------------------
function result(){
   if (randomNumber != 1){
      if (activePlayer === 0) {
         sumPlayer1 += randomNumber;
         current[0].textContent = sumPlayer1;
      }
      else { 
         sumPlayer2 += randomNumber;
         current[1].textContent = sumPlayer2;
      }
   }
   else reversePlayers();
}
//--Бросаем кубик--------------------------------------------
   buttonRollDice.addEventListener("click", ()=>{
      randomNumber = Math.floor(6 * Math.random()) + 1;
      getDice();
      result();
   });
//--Действия при нажатии клавиши Hold и смена игрока--------
buttonHold.addEventListener("click", () =>{
   generalResult1 += sumPlayer1;
   generalResult2 += sumPlayer2;

   if (activePlayer === 0) score[0].textContent = generalResult1;
   else { score[1].textContent = generalResult2;}

   const player1 = document.querySelector(`.player--${activePlayer}`);
   player1.classList.toggle("player--active");

   reversePlayers();

   const player2 = document.querySelector(`.player--${activePlayer}`);
   player2.classList.toggle("player--active");

//--Проверка набранных баллов---------------------------------
if (generalResult1 >= 10){
   winner.classList.add("player--winner");
   imgNew.style.display = "none";
   }
   else if (generalResult2 >= 10){
      winner1.classList.add("player--winner");
      imgNew.style.display = "none";
   } 
});
//--Смена игрока----------------------------------------------
function reversePlayers(){
   activePlayer = activePlayer === 0 ? 1 : 0;
   sumPlayer1 = sumPlayer2 = 0;
   current[0].textContent = sumPlayer1;
   current[1].textContent = sumPlayer2;
}