'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
const account1 = {
  owner: 'js',
  // owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'jd',
  // owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
//------------------------------------------------------------------------
function saveStorageChanges(storage = storageAccounts) {
  localStorage.setItem('accounts', JSON.stringify(storageAccounts));
}
//------------------------------------------------------------------------
if (!localStorage.getItem('accounts')) {
  localStorage.setItem('accounts', JSON.stringify(accounts));
};

let storageAccounts = JSON.parse(localStorage.getItem('accounts')) || [];
let logInUser = {};
let balanceWithoutLoan = '';
let currentBalance = '';
let loansTotal = '';

if (typeof logInUser['loans'] !== "undefined") {
  loansTotal = logInUser.loans.reduce((prevValue, item) => { return item + prevValue; }, 0);
} else {
  loansTotal = 0;
};
//-----------------------OPERATION: AUTO LOGIN----------------------------
if (JSON.parse(localStorage.getItem('logedUser'))) {
  const logedUser = JSON.parse(localStorage.getItem('logedUser'));
  logInUser = storageAccounts.find(item => item.owner === logedUser.name && item.pin === logedUser.pin);
  logInPassed(logInUser);
  countDown()
};
//-----------------------LOGIN EVENT--------------------------------------
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  logInUser = storageAccounts.find(item => item.owner === inputLoginUsername.value && item.pin === Number(inputLoginPin.value));
  if (logInUser) {
    logInPassed(logInUser);
  } else {
    alert('Accoun not exist!');
  };
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

//-----------------------OPERATION: LOGIN---------------------------------
function logInPassed(logInUser) {
  containerApp.style.opacity = '1';
  logInUser.movements.forEach(value => {
    const movementId = logInUser.movements.indexOf(value) + 1;
    if (value < 0) {
      withdrowalDisplay(movementId, value);
    } else {
      depositDisplay(movementId, value);
    };
  });
  localStorage.setItem('logedUser', JSON.stringify({ name: logInUser.owner, pin: logInUser.pin }));
  if (typeof logInUser['loans'] !== "undefined") {
    logInUser.loans.forEach(value => {
      depositDisplay(logInUser.movements.length + logInUser.loans.indexOf(value) + 1, value);
    });
  };
  summary();
  countDown();
};

//-----------------------OPERATION: SUMMARY-------------------------------
function summary(movements = logInUser.movements) {
  currentBalance = (movements.reduce((prevValue, item) => { return item + prevValue; }, 0)) + loansTotal;
  labelBalance.textContent = currentBalance + '€';
  let res = movements.filter((item) => item > 0);
  const sumIn = res.reduce((prevValue, item) => { return item + prevValue; }, 0) + loansTotal;
  labelSumIn.textContent = sumIn + '€';
  let res2 = movements.filter((item) => item < 0);
  const sumOut = res2.reduce((prevValue, item) => { return item + prevValue; }, 0);
  labelSumOut.textContent = sumOut + '€';
};

//-----------------------OPERATION: WITHDROWAL DISPLAY---------------------
function withdrowalDisplay(movementId, value, date = '01/01/2021') {
  containerMovements.insertAdjacentHTML('afterbegin',
    `
      <div class="movements__row">
        <div class="movements__type movements__type--withdrawal">${movementId} withdrowal</div>
        <div class="movements__date">${date}</div>
        <div class="movements__value">${value}€</div>
      </div>
      `)
};

//-----------------------OPERATION: DEPOSIT DISPLAY------------------------
function depositDisplay(movementId, value, date = '01/01/2021') {
  containerMovements.insertAdjacentHTML('afterbegin',
    `
  <div class="movements__row">
    <div class="movements__type movements__type--deposit">${movementId} deposit</div>
    <div class="movements__date">${date}</div>
    <div class="movements__value">${value}€</div>
  </div>
  `);
};

//-----------------------TRANSFER EVENT-----------------------------------
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  transfer(inputTransferTo.value, inputTransferAmount.value);
});

//-----------------------OPERATION: TRANSFERS-----------------------------
function transfer(user, amount) {
  if (amount > currentBalance) {
    alert('Sorry, but loan can not exceed your balance.');
  } else {
    currentBalance = currentBalance - amount;
    labelBalance.textContent = currentBalance + '€';
    (storageAccounts.find(item => item.owner === user)).movements.push(+amount);
    logInUser.movements.push(-amount);
    saveStorageChanges();
    const movementId = logInUser.movements.length;
    withdrowalDisplay(movementId, -amount);
  };
};

//-----------------------LOAN EVENT---------------------------------------
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  loan(amount);
});

//-----------------------OPERATION: LOAN----------------------------------
function loan(amount) {
  balanceWithoutLoan = logInUser.movements.reduce((prevValue, item) => { return item + prevValue; }, 0);
  if (balanceWithoutLoan >= amount + loansTotal) {
    loansTotal = loansTotal + amount;
    if (typeof logInUser['loans'] !== "undefined") {
      logInUser.loans.push(amount);
    } else {
      logInUser.loans = [amount];
    };
    saveStorageChanges();
    depositDisplay(logInUser.movements.length + logInUser.loans.length, amount);
    summary();
  } else {
    alert('We are sorry, we can not grant this loan.');
  };
};

//-----------------------CLOSE ACCOUNT EVENT-------------------------------
btnClose.addEventListener('click', (e) => {
  e.preventDefault;
  if (logInUser.owner === inputCloseUsername.value && logInUser.pin === Number(inputClosePin.value)) {
    closeAcc(logInUser);
  } else {
    alert('User name and/or pin incorrect');
  };
});

//-----------------------OPERATION: CLOSE ACCOUNT--------------------------
function closeAcc(logInUser) {
  const currentAccounts = storageAccounts.filter((user) => !(user.owner === logInUser.owner));
  localStorage.setItem('accounts', JSON.stringify(currentAccounts));
  // saveStorageChanges(currentAccounts);
  // confirm(`Are you shure you want to close ${logInUser.owner} account?`);
  alert(`Account ${logInUser.owner} closed!`);
  localStorage.removeItem('logedUser');
};

//-----------------------SORT EVENT---------------------------------------
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  sort();
});

//-----------------------OPERATION: SORT----------------------------------
function sort() {
  alert('Sorted!');
};

//-----------------------OPERATION: LOGOUT--------------------------------
function logOut() {
  alert('Log Out');
  localStorage.removeItem('logedUser');
  document.location.reload()
};
//-----------------------OPERATION: COUNTDOWN-----------------------------
function countDown () {
  let min = 1;
  let sec = 0;
  min--;
  sec = 59;
  const couter = setInterval(() => {
    labelTimer.textContent = min + ':' + sec;
    if (min===0 & sec===0){
      labelTimer.textContent = '0:00';
      logOut();
      clearInterval(couter);
    } else if (sec===0){
      min--;
      sec = 59;
    } else {
      sec--;
    };
  }, 1000);
};






//TODO 1)transfers - done. 2)Loans - done. 3)Timer&logout. 4)Dates. 5)Sort.