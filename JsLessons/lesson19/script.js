'use strict';
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

// initialize the map on the "map" div with a given center and zoom
navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords;
    const currentCoords = [latitude, longitude];
    // init map
    const map = L.map('map').setView(currentCoords, 13);
    map.on('click', (e) => {
        console.log(e);
    })
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker(currentCoords).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
});

class App {
    constructor() {
    }
    #renderWorkouts() {

    }
}
//---------Map ==========
