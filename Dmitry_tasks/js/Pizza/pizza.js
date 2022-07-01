'use strict';
const basket = document.querySelector('.basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const body = document.querySelector('body');
const modalBox = document.querySelector('.modal-box');
const buttonBuy = document.querySelectorAll('.buy');
const cost = document.querySelector('.cost');
const number = document.querySelector('.number');
const howMany = document.querySelector('.how-many');
const table = (document.querySelector('.ta'));
const pizzas = [
    {
        name: "Франческа",
        info: "Сливочный соус дор-блю, сыр моцарелла, салями, бекон",
        price: 199,
        src: "pictures/франческо.png",
        amount: 1,
    },
    {
        name: "Карбонара",
        info: "Сливочный соус сыр моцарелла, бекон, шампиньоны, ветчина, сыр пармезан, яйцо куриное",
        price: 219,
        src: "pictures/карбонара.png",
        amount: 1,
    },
    {
        name: "Ricco",
        info: "Соус из томатов, салями, ветчина, охотничьи колбаски, бекон, копчёное куриное филе, сыр моцарелла, шампиньоны, маринованный лук, болгарский перец, помидоры, маслины, чесночное масло",
        price: 229,
        src: "pictures/ricco.png",
        amount: 1,
    },
    {
        name: "Чилийская",
        info: "Соус из томатов, сыр моцарелла, куриное филе, салями, соус острый, чесночное масло",
        price: 219,
        src: "pictures/чилийская.png",
        amount: 1,
    },
];
let  pizzaAmount, orderPizza;
let zero = 0;
// Кнопка корзины--------------------------------------
basket.addEventListener('click', (event) =>{
    if (number.textContent > -1){
        modal.style.display = 'block';
        event.stopPropagation()
    }
    });
//Закрытие модалки по крестику-------------------------------
close.addEventListener('click', () =>{
    modal.style.display = "none";
});
//Закрытие модалки по esc-------------------------------
document.addEventListener('keydown', function (e){
    if(e.key === 'Escape'){
        modal.style.display = "none";
        basket.style.border = "2px solid white";
    }
});
////Закрытие модалки по клику-------------------------------
document.addEventListener('click', function (event){
    // if (event.target.className !== "modal"){
    if ((event.target).closest(".modal")){
        return;
    }
    modal.style.display = 'none';
});
//Подсчет товаров-----------------------------------
buttonBuy.forEach(element =>
    element.addEventListener('click', (event) => {
        const pizzaNameOrder = event.target.getAttribute("data-pizza");
         orderPizza = pizzas.find(el => el.name === pizzaNameOrder);
        pizzaAmount = zero += orderPizza.amount;

        let isPizzaExist = false;

        const pizzaInLocal = (JSON.parse(localStorage.getItem("localPizza")) || [])
            .map(item => {
                if (item.name !== orderPizza.name)
                    return item;
                    isPizzaExist = true;
                    return {...item, sum: howMany * item.price}
            });
        if (!isPizzaExist) {
            const newPizza = {
                name: orderPizza.name,
                price: orderPizza.price,
                info: orderPizza.info,
                src: orderPizza.src,
                amount: pizzaAmount,
                sum: orderPizza.price * howMany,
            }
            pizzaInLocal.push(newPizza);
        }
        localStorage.setItem("localPizza", JSON.stringify(pizzaInLocal))
        getPizza()
    })
);
function getPizza(){
    const newOrder = JSON.parse(localStorage.getItem("localPizza")) || [];
    console.log(newOrder);
    const elemForDelete = [...(document.querySelectorAll('.ta') || [])];

    elemForDelete.forEach(item => item.remove());
    newOrder.forEach(elem => {
        const clone = table.cloneNode(true);
        const tableImg = clone.querySelector('.pizza-table-img');
        const pizzaName = clone.querySelector('.pizza-name');
        const pizzaInfo = clone.querySelector('.pizza-info');
        const pizzaPrice = clone.querySelector('.pizza-price');
        tableImg.src = elem.src;
        pizzaName.textContent = elem.name;
        pizzaInfo.textContent = elem.info;
        pizzaPrice.textContent = elem.sum;
        // number.textContent = elem.amount;
        // howMany.textContent = elem.amount;
        // cost.textContent = elem.sum;
        modal.append(clone);
});
}
getPizza()

// const one = 1;
// const minus = document.querySelectorAll('.minus');
// const plus = document.querySelectorAll('.plus');
// plus.forEach(element =>
//     element.addEventListener('click', () => {
//         howMany.textContent = pizzaAmount += one;
//     })
// );
// minus.forEach(element =>
// element.addEventListener('click', () =>{
//       howMany.textContent = pizzaAmount -= one;
// })
// )
function deleteOrder(event){
    const arrIsLocal = JSON.parse(localStorage.getItem("localPizza"));
    const result =  arrIsLocal.filter(el => el.name !== id)
    console.log(result)
}
// if( event.target.className = "th_5"){
//     const elemMas = event.target.getAttribute("basket");
//     const arrIsLocal = JSON.parse(localStorage.getItem("order"));
//     const qqq = arrIsLocal.filter(elem => elem.name !== elemMas)
//     localStorage.setItem("order", JSON.stringify(qqq));
//     updateOrder();
// }