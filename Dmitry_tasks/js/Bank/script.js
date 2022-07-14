'use strict';
// Elements
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let today = new Date();
const fiveMin = Number(new Date()) + 10000;
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [1300, 300],
  interestRate: 1.2,
  login: 'js',
  pin: 1,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [400, -50, 8000, 360, 100, -500],
  interestRate: 1.5,
  login: 'jd',
  pin: 2,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [100, -700, 1500, 900, -200, 300],
  interestRate: 0.7,
  login: 'stw',
  pin: 3,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [400, -400, 340, -320, 560],
  interestRate: 1,
  login: 'ss',
  pin: 4,
};

const accounts = [account1, account2, account3, account4];
// Регистрация
btnLogin.addEventListener('click', () => {
  const localAccounts = JSON.parse(localStorage.getItem('accounts'));
  const activeUser = localAccounts.find(elem => elem.login === inputLoginUsername.value && elem.pin === Number(inputLoginPin.value))
  if (activeUser.login !== undefined){
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    containerApp.style.opacity = "1";
    labelDate.textContent = `${today.getDate()}/0${today.getMonth() + 1}/${today.getFullYear()}`;
    localStorage.setItem("activeUser", activeUser.login);
    localStorage.setItem('fiveMin', JSON.stringify(fiveMin))
    startTimer()
    movements()
  } else {
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    alert("Неправильный логин или пароль!")
  }
})
function init() {
  if (!JSON.parse(localStorage.getItem('accounts'))) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
  if (localStorage.getItem("activeUser")){
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    containerApp.style.opacity = "1";
    labelDate.textContent = `${today.getDate()}/0${today.getMonth() + 1}/${today.getFullYear()}`;
    startTimer();
    movements()
  }
}
init()
function startTimer() {
  const start = setInterval(startTimer, 1000);
  const now = Number(new Date())
  const minutes1 = document.querySelector('.minutes');
  const seconds1 = document.querySelector('.seconds');
  const timer = JSON.parse(localStorage.getItem('fiveMin')) - now;
  // console.log(timer);
  if (timer <= 0) {
    clearInterval(start);
    containerApp.style.opacity = "0";
  }
  const minutes = timer > 0 ? Math.floor(timer / 1000 / 60) % 60 : 0;
  const seconds = timer > 0 ? Math.floor(timer /1000) % 60 : 0;

  minutes1.textContent = minutes < 10 ? '0' + minutes : minutes;
  seconds1.textContent = seconds < 10 ? '0' + seconds : seconds;
}
// Денежные операции
function movements(){
  const persons = JSON.parse(localStorage.getItem('accounts'));
  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));
  containerMovements.innerHTML = "";
  neededPerson.movements.forEach(elem => {
    if (elem > 0){
      containerMovements.innerHTML +=
          `<div class="movements__row">
          <div class="movements__type movements__type--deposit">deposit</div>
          <div class="movements__date">${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}</div>
          <div class="movements__value">${elem}</div
        </div>`
    } else {
      containerMovements.innerHTML +=
          `<div class="movements__row-withdrawl">
          <div class="movements__type movements__type--withdrawal">withdrawal</div>
          <div class="movements__date">${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}</div>
          <div class="movements__value--minus">${elem}</div>
        </div>`
    }
    const balance = neededPerson.movements.reduce((a,b) => a + b, 0)
    labelBalance.textContent = balance + "€";
  });
}
// Перевод денег
btnTransfer.addEventListener('click', transfer);
function transfer() {
  const persons = JSON.parse(localStorage.getItem('accounts'));
  const balance = persons.find(elem => elem.login === localStorage.getItem('activeUser')).movements.reduce((a, b) => a + b);
  persons.map(elem => {
    if (elem.login === inputTransferTo.value && inputTransferTo.value !== localStorage.getItem('activeUser')) {
      if (Number(inputTransferAmount.value) <= balance && Number(inputTransferAmount.value) > 0) {
        elem.movements.push(Number(inputTransferAmount.value));
        inputTransferAmount.value = "";
        inputTransferTo.value = "";
        return {...elem}
      }
      if (Number(inputTransferAmount.value) > balance) alert("Недостаточно средств!");
    }
    if (elem.login === localStorage.getItem('activeUser') && Number(inputTransferAmount.value) > 0){
        elem.movements.push(Number(-inputTransferAmount.value));
        return {...elem}
    }
  })
  containerMovements.innerHTML = "";
  localStorage.setItem('accounts', JSON.stringify(persons));
  movements()
}
// Взять в кредит
btnLoan.addEventListener('click', () => {
  const persons = JSON.parse(localStorage.getItem('accounts'));
  persons.map(elem =>{
    const balance = persons.find(elem => elem.login === localStorage.getItem('activeUser')).movements.reduce((a, b) => a + b);
    if (elem.login === localStorage.getItem('activeUser') && Number(inputLoanAmount.value) <= balance) {
        elem.movements.push(Number(inputLoanAmount.value));
        inputLoanAmount.value = ""
        containerMovements.innerHTML = "";
    }
    if (Number(inputLoanAmount.value) > balance) {
      inputLoanAmount.value = ""
      alert("Слишком большой кредит!")
    }
    return {...elem,}
  })
  localStorage.setItem('accounts', JSON.stringify(persons));
  movements();
})
btnSort.addEventListener('click', () =>{
  const persons = JSON.parse(localStorage.getItem('accounts'));
  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));
  neededPerson.movements.sort((a, b) => a - b);
  localStorage.setItem('accounts', JSON.stringify(persons))
  movements()
})

btnClose.addEventListener('click', () =>{
  const persons = JSON.parse(localStorage.getItem('accounts'))
  const neededPerson = persons.find(elem => elem.login === localStorage.getItem('activeUser'));
  if (inputCloseUsername.value === neededPerson.login && Number(inputClosePin.value) === neededPerson.pin){
    const index = persons.indexOf(neededPerson)
    persons.splice(index, 1);
    localStorage.setItem('accounts', JSON.stringify(persons))
    localStorage.removeItem('activeUser');
    containerApp.style.opacity = "0";
    init()
  }
})