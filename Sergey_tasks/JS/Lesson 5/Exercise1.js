// const rowArray = [12, 2, 8];
// console.log(rowArray);
// // console.log(rowArray.reverse());
// // //--------------------------------------------------------------
// // rowArray.splice(0, 3, 4, 2, 1);
// // console.log(rowArray);
// //---------------------------------------------------------------
// function reverseEiements(arr){
//    const array = [...arr];
//    [array [0], array[array.length-1]] = [array[array.length-1], array [0]];
//    return array;
// }
// console.log(reverseEiements(rowArray));

//-----------------------------------------------------------------

// const myCompany = {
//    companyName: "Verh-It",
//    companyCreatedYear: 1975, 
//    amountOfPeople: 150, 
//    companyHead: "Sergey Verkhovod",  
//    calcAge: function (){
//       this.ageMyCompany = new Date().getFullYear() - this.companyCreatedYear;
//       return this.ageMyCompany;
//    },
//    calcAmountOfPeople: function(n){
//       this.calculatePeople = this.amountOfPeople + (100 * n);
//       return this.calculatePeople;
//    },
//    getInfo: function(){
//       return `Название компании: "${this.companyName}", 
//       Компания основана в ${this.companyCreatedYear} г.,
//       На момент основания в компании работало ${this.amountOfPeople} чел., 
//       Основатель номпании: ${this.companyHead}, 
//       На мировом рынке компания работает ${this.ageMyCompany} лет, 
//       На сегодняшний день  в компании работает ${this.calculatePeople} чел.`;
//    },
// };
// console.log(myCompany.calcAge());
// console.log(myCompany.calcAmountOfPeople(47));
// console.log(myCompany.getInfo());

//-------------------------------------------------------------------
// function writeInfoCompany(){
//    const name = document.querySelector(".h3");
//    const companyName = document.createElement("span");
//    companyName.textContent = myCompany.companyName;
//    companyName.style.color = 'red';
//    name.append(companyName);

//    const head = document.querySelector(".p1");
//    const companyHead = document.createElement("span");
//    companyHead.textContent = myCompany.companyHead;
//    companyHead.style.color = 'red';
//    head.append(companyHead);

//    const year = document.querySelector(".p2");
//    const companyCreatedYear = document.createElement("span");
//    companyCreatedYear.textContent = myCompany.companyCreatedYear;
//    companyCreatedYear.style.color = 'red';
//    year.append(companyCreatedYear);
 
//    const people = document.querySelector(".p3");
//    const companyPeople = document.createElement("span");
//    companyPeople.textContent = myCompany.calculatePeople;
//    companyPeople.style.color = 'red';
//    people.append(companyPeople);
// }
// writeInfoCompany();

//----------------------------------------------------------------------
// const myTable = document.querySelector("table");
// for (let i = 0; i < myTable.rows.length; i++) {
//   let row = myTable.rows[i];
//   row.cells[i].style.backgroundColor = "#ff0000";
// }
//----------------------------------------------------------------------

const findTable = document.getElementById('age-table');
console.log(findTable);

const findLabels = document.getElementsByTagName('label')
console.log(findLabels);

const findElementTd = document.getElementsByTagName("td"); //все td
console.log(findElementTd);
const findTdAge = findTable.querySelector("age");
console.log(findTdAge);

const findForm = document.getElementsByTagName("form");
console.log(findForm);
const findForm1 = document.getElementsByName("search");
console.log(findForm1);

const findInputs = document.querySelectorAll("input"); // все input
console.log(findInputs);
// const firstInput = document.getElementsByTagName("input")[0]; // 1 input
const firstInput = findInputs[0]; // 1 input
console.log(firstInput);
const lastInput = findInputs[findInputs.length - 1]; // последний input
console.log(lastInput);

