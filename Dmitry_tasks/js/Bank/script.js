'use strict';
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const deposit = document.querySelector('.movements__row');
const withdrawal = document.querySelector('.movements__row-withdrawl');

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

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [1300, 300],
  interestRate: 1.2, // %
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
  const activeUser= localAccounts.find(elem => elem.login === inputLoginUsername.value && elem.pin === Number(inputLoginPin.value))
  if (activeUser !== undefined){
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    containerApp.style.opacity = "1";
    localStorage.setItem("activeUser", activeUser.login);
    movements()
  } else alert("Неправильный логин или пароль!")
})
// console.log(JSON.parse(localStorage.getItem('accounts')));

function init() {
  if (localStorage.getItem('accounts')){
    return
  }
  else {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
}
init()
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
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${elem}</div
        </div>`
    } else {
      containerMovements.innerHTML +=
          `<div class="movements__row-withdrawl">
          <div class="movements__type movements__type--withdrawal">
            1 withdrawal
          </div>
          <div class="movements__date">24/01/2037</div>
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
  // console.log(persons.indexOf(neededPerson));
  if (inputCloseUsername.value === neededPerson.login && Number(inputClosePin.value) === neededPerson.pin){
    const index = persons.indexOf(neededPerson)
    persons.splice(index, 1);
    localStorage.setItem('accounts', JSON.stringify(persons))
    init()
  }
})









