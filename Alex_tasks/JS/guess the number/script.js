'use strict';

function randomInteger(min = 1, max = 20) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};
let number = randomInteger();
console.log(number);
let score = Number(document.querySelector('.score').innerHTML);
let highScore = Number(document.querySelector('.highscore').innerHTML);
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const body = document.body;
checkBtn.addEventListener('click', () => {
    const guessInput = document.querySelector('.guess').value;
    if (number > guessInput)
        [
            message.innerHTML = 'Too low!',
            score -= 1,
            console.log(score)
        ];
    else if (number == guessInput)
        [
            message.innerHTML = 'Match!!!',
            body.style.background = "#60b347"];
    else
        [
            message.innerHTML = 'Too hight!']
});
// const refreshBtn = document.querySelector('.again');
// refreshBtn.addEventListener('click', randomInteger);
