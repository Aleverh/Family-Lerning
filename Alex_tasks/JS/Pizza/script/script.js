'use strict';

const showBtn = document.querySelectorAll('.header__basket');
const closeBtn = document.querySelectorAll('.modal__close');
const modal = [document.querySelector('.modal'), document.querySelector('.overlay')];

showBtn.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        modal.forEach(item => {
            item.classList.remove('hidden')
        });
    });
});

//-------------------closing modal function
function closeModal() {
    modal.forEach(item => {
        item.classList.add('hidden')
    })
};

//------------------close modal by pressing Esc
document.addEventListener('keyup', function (e) {
    if (e.code === 'Escape') {
        closeModal()
    }
});

//----------------closing modal by pressing btn
closeBtn.forEach(element => {
    element.addEventListener('click', closeModal);
});

//---------------------closing modal by clicking outside modal
/* document.addEventListener('click', function (e) {
     const isModalOpen = modal[0].classList.contains('hidden');
    if (isModalOpen && !e.target.closest('modal') && !e.target.closest('.show-modal')) {
        closeModal()
    }
    console.log(isModalOpen);
}); */

//-------------function for gettin array with data
/* function getData(item) {
    let pizzaItemCollection = document.querySelectorAll(item);
    pizzaItemCollection = Array.from(pizzaItemCollection);
    const pizzaItem = pizzaItemCollection.map((name => {
        return name.textContent;
    }))
    return {pizzaItem}
}

const test = getData('.card__title');
console.log(test); */


const pizzaNamesData = Array.from(document.querySelectorAll('.card__title'));
const pizzaNames = pizzaNamesData.map((name) => {
    return name.textContent;
})

const pizzaPriceData = Array.from(document.querySelectorAll('.price'));
const pizzaPrices = pizzaPriceData.map((price) => {
    return price.textContent;
});

const pizzaImgsData = Array.from(document.querySelectorAll('.card__img'));
const pizzaImgs = pizzaImgsData.map((img) => {
    return img.innerHTML;
});

const pizza1 = {
    id: 1,
    name: pizzaNames[0],
    price: pizzaPrices[0],
    img: pizzaImgs[0],
};
const pizza2 = {
    id: 2,
    name: pizzaNames[1],
    price: pizzaPrices[1],
    img: pizzaImgs[1],
};
const pizza3 = {
    id: 3,
    name: pizzaNames[2],
    price: pizzaPrices[2],
    img: pizzaImgs[2],
};
const pizza4 = {
    id: 4,
    name: pizzaNames[3],
    price: pizzaPrices[3],
    img: pizzaImgs[3],
};

//------------------ arr of all objects
const pizzaData = [pizza1, pizza2, pizza3, pizza4];

//------------------ adding element into basket
function addChosenPizza(pizzaData) {
    modal[0].insertAdjacentHTML("beforeEnd",
        `
    <div class="addedItem">
    <span class="addedItem__remove">&times;</span>
    <div class="addedItem__img">${pizzaData.img}</div>
    <span class="addedItem__name">${pizzaData.name}</span>
    <img src="./img/minusbutton.png" alt="" class="addedItem__minusButton">
    <img src="./img/plusbutton.png" alt="" class="addedItem__plusButton">
    <span class="addedItem__amount">1</span>
    <span class="addedItem__cost">${pizzaData.price}</span>
    </div>
`);
    // -------------remove added pizza
    let deleteItem = document.getElementsByClassName('addedItem__remove');
    deleteItem = Array.from(deleteItem);
    deleteItem.forEach(item => {
        item.addEventListener("click", function () {
            item.parentElement.remove();
        });
    });
    //---------edit amount of pizza-----------
    const pizzaPlus = Array.from(document.getElementsByClassName('addedItem__plusButton'));
    const pizzaMinus = Array.from(document.getElementsByClassName('addedItem__minusButton'));
    const curentPizzaAmount = document.querySelector('.addedItem__amount');
    let pizzaAmount = Number(curentPizzaAmount.textContent);
    const currentPizzaCost = document.querySelector('.addedItem__cost');
    let pizzaCost = Number(currentPizzaCost.textContent);
    pizzaPlus.forEach(element => {
        element.addEventListener('click', () => {
            curentPizzaAmount.textContent = ++pizzaAmount;
            currentPizzaCost.textContent = Number(curentPizzaAmount.textContent) * pizzaCost;
        });
    });
    pizzaMinus.forEach(element => {
        element.addEventListener('click', () => {
            curentPizzaAmount.textContent = --pizzaAmount;
            currentPizzaCost.textContent = Number(curentPizzaAmount.textContent) * pizzaCost;
        });
    });
};
const addBtn = Array.from(document.getElementsByClassName('card__button'));
addBtn.forEach(element => {
    const elementParrent = element.closest('.menu__card');
    element.addEventListener("click", () => {
        const dataIndex = elementParrent.getAttribute('data-id');
        const test = pizzaData.find(item => item.id === Number(dataIndex));
        if (1 == 2) {

        }
        addChosenPizza(test);
    })
});

/*toDo list  
1) Сделать зависимость передачи данных из pizzaData в корзину в зависимости от того 
какую пицу заказали. -done!
2) Сделать проверку на наличие объекта в корзине что бы не добавлять одинаковые элементы
3) Сделать закрытие корзины по клику вне ее окна
4) Сделать счетчик заказа на корзине в header
5) Сделать отображение цены в десятичных
6) Убрать возможность делать отрицательное количество елемента в корзине
7) узнать почему before не заданных размеров
*/

function name(params) {
    
}
[{id:1,
count:10,}]