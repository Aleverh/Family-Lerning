'use strict';
import _ from '../node_modules/leaflet/dist/leaflet';
// you can see demo on this page https://mapty.netlify.app/
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const button = document.querySelector('.form__btn');
const formElements = Array.from(document.querySelectorAll('.form__row'));
//---------------------------------------------------------------------------------------
//----------------Initiating the map and current position--------------------------------
const map = L.map('map')

navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    const currentCoords = [latitude, longitude];
    map.setView(currentCoords, 13);
    L.marker(currentCoords).addTo(map).bindPopup("Your position").openPopup();
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
//---------------Add wkout---------------------------------------------------------------
map.on('click', (e) => {
    L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    position = Object.values(e.latlng);
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    };
});
//-------------------choosing inputType----
inputType.addEventListener('change', function () {
    if (inputType.value === 'cycling') {
        formElements[3].classList.add('form__row--hidden');
        formElements[4].classList.remove('form__row--hidden');
    };
    if (inputType.value === 'running') {
        formElements[3].classList.remove('form__row--hidden');
        formElements[4].classList.add('form__row--hidden');
    };
});
//----------------------get date-----------
function getDate() {
    let now = new Date();
    const month = months[now.getMonth()]
    now = month + ' ' + now.getDay();
    return now;
};
//---------------------get id--------------
let id = 0;
function getId() {
    return id++;
};
//---------------------get pos-------------
let position = '';
//------creating workout obj---------------
let myWorkOut = '';
form.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        const speed = inputDistance.value / inputDuration.value;
        if (inputDistance.value && inputDistance.value && inputCadence.value || inputElevation.value) {
            if (inputType.value === 'cycling') {
                myWorkOut = new WorkOut(getId(), inputType.value, +inputDistance.value, +inputDuration.value, speed, +inputElevation.value, position, getDate());
            } else {
                myWorkOut = new WorkOut(getId(), inputType.value, +inputDistance.value, +inputDuration.value, speed, +inputCadence.value, position, getDate());
            }
        } else {
            alert('Fill up all inputs!');
        };
        myWorkOut.renderWorkout();
        myWorkOut.saveLocaly();
    };
})

//----------------create class---------------
class WorkOut {
    constructor(dataId, type, distance, duration, speed, moves, position, date) {
        this.dataId = dataId;
        this.type = type;
        this.distance = distance;
        this.duration = duration;
        this.speed = speed;
        this.moves = moves;
        this.position = position;
        this.date = date;
    }
    renderWorkout() {
        if (this.type === 'running') {
            containerWorkouts.insertAdjacentHTML('beforeend', `
            <li class="workout workout--running" data-id="${this.dataId}">
              <h2 class="workout__title">Running on ${this.date}</h2>
              <div class="workout__details">
                <span class="workout__icon">🏃‍♂️</span>
                <span class="workout__value">${this.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${this.duration}</span>
                <span class="workout__unit">min</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${this.speed}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
              <span class="workout__icon">🦶🏼</span>
              <span class="workout__value">${this.moves}</span>
              <span class="workout__unit">spm</span>
            </div>
            </li>
            `);
        } else {
            containerWorkouts.insertAdjacentHTML('beforeend', `
            <li class="workout workout--cycling" data-id="${this.dataId}">
              <h2 class="workout__title">Running on ${this.date}</h2>
              <div class="workout__details">
                <span class="workout__icon">🚴‍♀️</span>
                <span class="workout__value">${this.distance}</span>
                <span class="workout__unit">km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⏱</span>
                <span class="workout__value">${this.duration}</span>
                <span class="workout__unit">min</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${this.speed}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
              <span class="workout__icon">⛰</span>
              <span class="workout__value">${this.moves}</span>
              <span class="workout__unit">spm</span>
            </div>
            </li>
            `);
        };
        L.marker(this.position).addTo(map).bindPopup(this.type + " " + this.date).openPopup();
    }
    saveLocaly() {
        localStorage.setItem('data', JSON.stringify(this))
    }

};