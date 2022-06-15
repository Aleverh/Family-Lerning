'use strict';

function randomInteger(min = 1, max = 20) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
let startScore = document.querySelector('.score');
const initialScore = +startScore.textContent;
let highScore = document.querySelector('.highscore');
const data = {
    guessNumber: randomInteger(),
    score:  Number(startScore.textContent),
};
console.log(data.guessNumber);
const guessInput = document.getElementById('guessInput');
checkBtn.addEventListener('click', () => {
    startScore.textContent = --data.score;
    console.log(data.score);
    if (data.guessNumber > guessInput.value) {
        message.innerHTML = 'Too low!';
    }
    else if (data.guessNumber == guessInput.value) {
        message.innerHTML = 'Match!!!';
        document.body.style.background = "#60b347";
        highScore.textContent = data.score;
    }
    else {
        message.innerHTML = 'Too hight!';
    }
});


const refreshBtn = document.querySelector('.again');
refreshBtn.addEventListener('click', () => {
    startScore.textContent = initialScore;
    document.body.style.background = "";
    data.guessNumber = randomInteger();
    console.log(data.guessNumber);
});


