'use strict';
const basket = document.querySelector('.basket');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal')
const body = document.querySelector('body')
const modalBox = document.querySelector('.modal-box')
const buttonBuy = document.querySelectorAll('.buy')
const cost = document.querySelector('.cost')
const number = document.querySelector('.number')
const tableImg = document.querySelector('.pizza-table-img');
const pizzaName = document.querySelector('.pizza-name');
const pizzaInfo = document.querySelector('.pizza-info');
const pizzaPrice = document.querySelector('.pizza-price')
const howMany = document.querySelector('.how-many')
// function counting(){
//     if(localStorage.getItem('pizza1') > 0){
//         number.textContent = localStorage.getItem('number');
//     }else number.textContent = 0;
//
//     if (localStorage.getItem('pizzas') > 0){
//         cost.textContent = localStorage.getItem('pizzas')
//     }else cost.textContent = 0;
// }
// counting()
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
]
let pizzaNameOrder, pizzaPriceOrder, pizzaInformation, pizzaImg, pizzaAmount;
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
        pizzaNameOrder = event.target.getAttribute("data-pizza");
        const orderPizza = pizzas.find(el => el.name === pizzaNameOrder)
        pizzaPriceOrder = orderPizza.price;
        pizzaInformation = orderPizza.info;
        pizzaImg = orderPizza.src;
        pizzaAmount = zero += orderPizza.amount;

        let isPizzaExist = false;

        const pizzaInLocal = (JSON.parse(localStorage.getItem("localPizza")) || [])
            .filter(item => item.name !== orderPizza.name)
            .map(item => {
                    if (item.name !== orderPizza.name) {
                            return item;
                        isPizzaExist = true;
                        return {...item}
                    }
                    if (!isPizzaExist) {
                        const newPizza = {
                            name: pizzaNameOrder,
                            price: pizzaPriceOrder,
                            info: pizzaInformation,
                            src: pizzaImg,
                            amount: pizzaAmount,
                        }
                        pizzaInLocal.push(newPizza);
                    }
                    localStorage.setItem("localPizza", JSON.stringify(pizzaInLocal))

                    const clone = (document.querySelector('.ta'));
                    const clone2 = clone.cloneNode(true);
                    clone.after(clone2)
                    JSON.parse(localStorage.getItem("localPizza")).forEach(elem => {
                        tableImg.src = elem.src;
                        pizzaName.textContent = elem.name;
                        pizzaInfo.textContent = elem.info;
                        pizzaPrice.textContent = elem.price;
                        number.textContent = elem.amount;
                        howMany.textContent = elem.amount;
                    })
                }
            )
        }
    )
);
console.log(localStorage.getItem('pizzas'));
console.log(localStorage.getItem('number'));
const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
// plus.addEventListener('click', () => {
//     plusAfter = minusAfter += 1;
//     document.querySelector('.how-many').textContent = plusAfter;
// });
// minus.addEventListener('click', () =>{
//         minusAfter = plusAfter -= 1;
//         document.querySelector('.how-many').textContent = minusAfter;
// });

// function deleteOrder(id){
//     const result =  pizzas.filter(el => el.id !== id)
//     console.log(result)
// }


// quantity.addEventListener("click", () => {
//     const pizzaCount = parseInt(inputValue.value);
//     let isPizzaExist = false;
//
//     const oldOrder = (JSON.parse(localStorage.getItem("order")) || [])
//         // .filter(item => item.name !== selectedPizza.name)
//         .map(item => {
//             if (item.name !== selectedPizza.name)
//                 return item;
//             isPizzaExist = true;
//             const count = item.count + pizzaCount;
//             return { ...item, count, sum: count * item.price }
//         });
//     if (!isPizzaExist) {
//         const newPizza = {
//             name: selectedPizza.name,
//             count: pizzaCount,
//             price: selectedPizza.price,
//             sum: selectedPizza.price * pizzaCount,
//         }
//         oldOrder.push(newPizza);
//     }
//     localStorage.setItem("order", JSON.stringify(oldOrder));
//
//     closeModalPizza();
//     updateOrder();
// });
// //------------------------------------------------------------------------
// function updateOrder() {
//     const order = JSON.parse(localStorage.getItem("order")) || [];
//
//     const finalPrice = order.reduce((a, b) => a + b.sum, 0);
//     const pizzaCount = order.reduce((a, b) => a + b.count, 0);
//     const oldElements = [...(document.querySelectorAll('.tr-clone') || [])];
//
//     oldElements.forEach(item => item.remove());
//
//     // update bag info
//     headerSum.textContent = finalPrice + " грн.";
//     headerQuantity.textContent = pizzaCount + " шт.";
//     // update modal info
//
//     console.log(order);
//     order.forEach(elem => {
//         const trClone = tr.cloneNode(true);
//         trClone.classList.add('tr-clone');
//
//         const iconClearPizza = trClone.querySelector(".clear-pizza");
//         iconClearPizza.style.display = "block";
//         iconClearPizza.setAttribute("basket", `${elem.name}`);
//
//         const tableName = trClone.querySelector(".th_1");
//         const tableCount = trClone.querySelector(".th_2");
//         const tablePrice = trClone.querySelector(".th_3");
//         const tableSum = trClone.querySelector(".th_4");
//
//         tableName.textContent = elem.name;
//         tableCount.textContent = elem.count;
//         tablePrice.textContent = elem.price;
//         tableSum.textContent = elem.sum;
//         table.append(trClone);
//     });
//     // delPizza();
//     spanResult.textContent = finalPrice;
// };
// updateOrder();

