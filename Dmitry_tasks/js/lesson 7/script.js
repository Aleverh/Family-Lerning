'use strict';
let number;
function random(){
     number = Math.floor(Math.random() * 20) + 1;
     console.log(number);
}
random();
let score = document.querySelector('.score')
let initScore = 20;
let highScore = document.querySelector('.highscore')

const check = document.querySelector('.check')
 check.addEventListener('click', () =>{
     score.textContent = --initScore;
     let x = +document.querySelector('.guess').value;
    if (x === number){
         const answer = document.querySelector('.number');
         answer.textContent = 'You guessed';
         answer.style.fontSize = 16 + 'px';
         answer.style.backgroundColor = 'green'
         answer.style.color = 'white'
         highScore.textContent = score.textContent;
    }
    else if (x < number){
        const answer2 = document.querySelector('.number');
        answer2.textContent = 'Too low!';
        answer2.style.fontSize = 16 + 'px';
    }
    else {
        const answer3 = document.querySelector('.number');
        answer3.textContent = 'Too much!';
        answer3.style.fontSize = 16 + 'px';
    }
    if (highScore.textContent < score.textContent){
        highScore.textContent == score.textContent;
    }
    else if (highScore.textContent > score.textContent){
        highScore.textContent != score.textContent;
    }
});

const again = document.querySelector('.again')

again.addEventListener('click', () =>{
    random();
    asked();
    resetNumbers();
});
function asked(){
const ask = document.querySelector('.number');
ask.textContent = '?';
ask.style.fontSize = 6 + 'rem';
ask.style.backgroundColor = '#eee';
ask.style.color = '#333';
}

function resetNumbers(){
    const numbers = document.querySelector('.guess');
    numbers.value = '';
    initScore = 20;
    score.textContent = 20;
}