'use strict';
const basket = document.querySelector('.basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const body = document.querySelector('body');
const buttonBuy = document.querySelectorAll('.buy');
const cost = document.querySelector('.cost');
const number = document.querySelector('.number');
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
        price: 199,
        src: "pictures/чилийская.png",
        amount: 1,
    },
];
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
        const orderPizza = pizzas.find(el => el.name === pizzaNameOrder);

        let pizzaAmount = 0;
        pizzaAmount += orderPizza.amount;
        let isPizzaExist = false;
        const pizzaInLocal = (JSON.parse(localStorage.getItem("localPizza")) || [])
            .map(item => {
                if (item.name !== orderPizza.name){
                    return item;
                }
                    const count = ++orderPizza.amount;
                    isPizzaExist = true;
                    return {...item, count, amount: count, sum: count * orderPizza.price};
            });
                 if (!isPizzaExist) {
                    const newPizza = {
                        name: orderPizza.name,
                        price: orderPizza.price,
                        info: orderPizza.info,
                        src: orderPizza.src,
                        amount: orderPizza.amount,
                        sum: orderPizza.price,
                    }
                    pizzaInLocal.push(newPizza);
                }
        localStorage.setItem("localPizza", JSON.stringify(pizzaInLocal));
        getPizza();
    })
);
function getPizza(){
    const newOrder = JSON.parse(localStorage.getItem("localPizza")) || [];
    const finalPrice = newOrder.reduce((a, b) => a + b.sum, 0);
    const pizzaAmount = newOrder.reduce((a, b) => a + b.amount, 0);
    const elemForDelete = [...(document.querySelectorAll('.ta') || [])];
    elemForDelete.forEach(item => item.remove());
    newOrder.forEach(elem => {
        const clone = table.cloneNode(true);
        const deleteBusket1 = clone.querySelector('.delete-busket');
        deleteBusket1.setAttribute('busket', `${elem.name}`);
        console.log(deleteBusket1)
        const tableImg = clone.querySelector('.pizza-table-img');
        const pizzaName = clone.querySelector('.pizza-name');
        const pizzaInfo = clone.querySelector('.pizza-info');
        const pizzaPrice = clone.querySelector('.pizza-price');
        const how = clone.querySelector('.how-many');
        const minus = clone.querySelector('.minus');
        const plus = clone.querySelector('.plus');
        tableImg.src = elem.src;
        pizzaName.textContent = elem.name;
        pizzaInfo.textContent = elem.info;
        pizzaPrice.textContent = elem.price * elem.amount;
        how.textContent = elem.amount;
        number.textContent = pizzaAmount;
        cost.textContent = finalPrice;
        modal.append(clone);
        let plusA = elem.amount;
        let minusA = elem.amount;
        plus.addEventListener('click', () => {
                plusA += 1;
                pizzaPrice.textContent = elem.price * plusA;
                how.textContent = plusA;
            }
        )
        minus.addEventListener('click', () =>{
            if (how.textContent > 0){
                minusA = --plusA;
                pizzaPrice.textContent = elem.price * minusA;
                how.textContent = minusA;
            }
        })
});
}
getPizza()

// const deleteBusket = document.querySelectorAll('.ta')
// deleteBusket.forEach(element =>
//     element.addEventListener("click", (event) => {
//         if (event.target.className === "delete-busket-img") {
//         const pizzaAttr = element.getAttribute('busket');
//         console.log(pizzaAttr);
//         const result = JSON.parse(localStorage.getItem("localPizza")).filter(elem => elem.name !== pizzaAttr)
//         localStorage.setItem("localPizza", JSON.stringify(result));
//         console.log(result)
//         getPizza()
//     }
// })
// );
    const deleteBusket = document.querySelectorAll('.delete-busket')
    deleteBusket.forEach(element =>
        element.addEventListener("click", (event) => {
            const pizzaAttr = element.getAttribute('busket');
            console.log(pizzaAttr);
            const result = JSON.parse(localStorage.getItem("localPizza")).filter(elem => elem.name !== pizzaAttr);
            localStorage.setItem("localPizza", JSON.stringify(result));
            console.log(result);
            getPizza();
        })
    );