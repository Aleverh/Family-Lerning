'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
countriesContainer.addEventListener('click', () => {

});
function renderCountry(name, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${name}?fullText=true`);
    request.send();
    request.addEventListener('load', () => {
        // setTimeout(() => {}, 2000);
        const [data] = JSON.parse(request.responseText);
        console.log(data);
        const html = `
            <article class="country">
                <img class="country__img" src="${data.flags.png}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${data.population}</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
                    <p class="country__row"><span>💰</span>CUR</p>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
        if(callback)
            callback();
    });
}

renderCountry('germany', () => renderCountry('poland'));

console.log('second');

