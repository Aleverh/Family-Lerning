'use strict';
const modal = [document.querySelector('.modal'), document.querySelector('.overlay')];
const showBtn = document.querySelector('.header__basket');
showBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.forEach(item => {
        item.classList.remove('hidden')
    });
});
//?----------------is not working----------------------
/* document.addEventListener('click', function (e) {
    if (e.target.closest('.basket')) {
        openModal();
    }
}); */
//?----------------------------------------------------
//-------------------open modal function--------------------------------------
function openModal() {
    modal.forEach(item => {
        item.classList.remove('.hidden');
    });
}
//-------------------closing modal function--------------------------------------
function closeModal() {
    modal.forEach(item => {
        item.classList.add('hidden')
    })
};
//------------------close modal by pressing Esc----------------------------------
document.addEventListener('keyup', function (e) {
    if (e.code === 'Escape') {
        closeModal()
    }
});
//----------------closing modal by pressing btn----------------------------------
document.addEventListener('click', function (e) {
    if (e.target.closest('.close')) {
        closeModal()
    }
});
//----------------closing modal by clicking outside modal-------------------------
document.addEventListener('click', function (e) {
    if (e.target === modal[1]) {
        closeModal();
    }
});
//----------------pizza data------------------------------------------------------
const pizzaData = [{
    id: 1,
    name: 'Верона',
    price: 110.00,
    description: `Шинка, гриби печериці, сир пармезан, трюфельна олія, базилік, сир
    моцарелла, вершковий соус`,
    size: 40,
    img: `<img src="./img/pizza1.png" alt="">`,
}, {
    id: 2,
    name: 'Діавола',
    price: 135.00,
    description: `Салямі чорізо, салямі мілано, перець чилі свіжий і сухий, цибуля
    маринована, сир моцарелла, неаполітанський соус`,
    size: 40,
    img: `<img src="./img/pizza2.png" alt="">`,
}, {
    id: 3,
    name: 'Карбонара',
    price: 120.00,
    description: `Бекон, жовток курячий, часник, базилік, свіжий сир моцарелла, сир пармезан,
    вершковий соус`,
    size: 40,
    img: `<img src="./img/pizza3.png" alt="">`,
}, {
    id: 4,
    name: 'Пепероні',
    price: 125.00,
    description: `Салямі перероні, сир моцарела, сир пармезан, спеції, томатний соус`,
    size: 40,
    img: `<img src="./img/pizza4.png" alt="">`,
}];
//------------------set data into html--------------------------------------
const itemCards = Array.from(document.querySelectorAll('.menu__card'));
itemCards.forEach(element => {
    const elementParrent = element.closest('.menu__card');
    const ourPizza = pizzaData.find(item => item.id === Number(elementParrent.getAttribute('data-id')));
    const name = elementParrent.querySelector('.card__title');
    const price = elementParrent.querySelector('.price');
    const description = elementParrent.querySelector('.card__description');
    const size = elementParrent.querySelector('.size');
    const img = elementParrent.querySelector('.card__img');
    name.innerHTML = ourPizza.name;
    price.innerHTML = ourPizza.price + ' грн';
    description.innerHTML = ourPizza.description;
    size.innerHTML = ourPizza.size + ' см';
    img.innerHTML = ourPizza.img;
});
//------------------ adding element function and button------------------------------
function addFoundPizza(pizzaId, storageKey) {
    const myPizza = pizzaData.find(item => item.id === pizzaId.id);
    const storedPizzaCount = JSON.parse(localStorage.getItem(`pizza${storageKey}`)).count;
    const priceResult = Number(storedPizzaCount) * myPizza.price;
    modal[0].insertAdjacentHTML("beforeEnd",
        `
        <div class="addedItem" name="pizza${storageKey}" data-key="${storageKey}">
            <span class="addedItem__remove">&times;</span>
            <div class="addedItem__img">${myPizza.img}</div>
            <span class="addedItem__name">${myPizza.name}</span>
            <img src="./img/minusbutton.png" alt="" class="addedItem__minusButton">
            <img src="./img/plusbutton.png" alt="" class="addedItem__plusButton">
            <span class="addedItem__amount">${storedPizzaCount}</span>
            <span class="addedItem__cost">${priceResult}</span>
        </div>
        `);
};
const addBtn = Array.from(document.getElementsByClassName('card__button'));
addBtn.forEach(element => {
    const elementParrent = element.closest('.menu__card');
    element.addEventListener("click", (element) => {
        const dataIndex = Number(elementParrent.getAttribute('data-id'));
        if (!localStorage.getItem(`pizza${dataIndex}`)) {
            localStorage.setItem(`pizza${dataIndex}`, JSON.stringify({ id: dataIndex, count: 1 }))
        };
        const storageData = JSON.parse(localStorage.getItem(`pizza${dataIndex}`));
        const myOrder = Array.from(modal[0].querySelectorAll('.addedItem')).map(item => Number(item.getAttribute('data-key'))) || [];
        if (myOrder.includes(dataIndex)) {
            increaseAmount(document.getElementsByName(`pizza${dataIndex}`)[0]);
        } else {
            return addFoundPizza(storageData, `${dataIndex}`);
        }
    })
});
// -------------delete added pizza---------------------------------------
function deleteItem(item) {
    item.parentElement.remove();
};
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__remove')) {
        deleteItem(e.target.closest('.addedItem__remove'));
        localStorage.removeItem(e.target.parentElement.getAttribute('name'));
    }
});
//-------------edit amount of pizza---------------------------------------
function increaseAmount(item) {
    const itemParrent = item.closest('.addedItem');
    const currentPizzaAmount = itemParrent.querySelector('.addedItem__amount');
    let pizzaAmount = Number(currentPizzaAmount.textContent);
    const currentPizzaCost = itemParrent.querySelector('.addedItem__cost');
    const pizzaCost = Number(currentPizzaCost.textContent) / pizzaAmount;
    currentPizzaAmount.textContent = ++pizzaAmount;
    currentPizzaCost.textContent = Number(currentPizzaAmount.textContent) * pizzaCost;
    const storedPizzaData = JSON.parse(localStorage.getItem(`${itemParrent.getAttribute('name')}`));
    storedPizzaData.count = pizzaAmount;
    localStorage.setItem(`${itemParrent.getAttribute('name')}`, JSON.stringify(storedPizzaData));
};
function decreaseamount(item) {
    const itemParrent = item.closest('.addedItem');
    const currentPizzaAmount = itemParrent.querySelector('.addedItem__amount');
    let pizzaAmount = Number(currentPizzaAmount.textContent);
    const currentPizzaCost = itemParrent.querySelector('.addedItem__cost');
    const pizzaCost = Number(currentPizzaCost.textContent) / pizzaAmount;
    if (pizzaAmount > 1) {
        currentPizzaAmount.textContent = --pizzaAmount;
        currentPizzaCost.textContent = Number(currentPizzaAmount.textContent) * pizzaCost;
    }
}
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__plusButton')) {
        increaseAmount(e.target.closest('.addedItem__plusButton'));
    }
});
modal[0].addEventListener('click', function (e) {
    if (e.target.closest('.addedItem__minusButton')) {
        decreaseamount(e.target.closest('.addedItem__minusButton'));
    }
});
//-------------onload fill order from storage------------------------------
let storageKeys = ['pizza1', 'pizza2', 'pizza3', 'pizza4'];
storageKeys.forEach(key => {
    if (localStorage.getItem(key)) {
        const storageItem = JSON.parse(localStorage.getItem(key));
        const storageKey = storageItem.id;
        addFoundPizza(storageItem, storageKey);
    }
});

//TODO: 1) set counter on header basket. 2)add btn into modal for clear all items. 3)add btn for order chosen items