"use strict";

import 'leaflet/dist/leaflet.css';
import Leaflet from "leaflet";
import "./map.html";
import "./map.css";
import { 
    inputType,
    today,
    button,
    form,
    inputCadence,
    inputDistance,
    inputDuration,
    inputElevation,
    labelCadence,
    labelElevGain,
    
 } from './const';
import Movements, { getMov } from './Movements';
import Running from './Movements-Running';

// you can see demo on this page https://mapty.netlify.app/ ----------------------

class App {
    #map;
    #currentCoords;
    #newCoords;
    #movements;

    constructor() {
        this.getMovementsFromLocalStorage();
        this.setInitialCoords();
        inputType.addEventListener("click", this.checkTraning);
        this.checkTraning();
        this.renderInitMovements();
        this.clickButton();
        this.showCenterOfMap();
        // this.showMarker();
    }

    setInitialCoords (){
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            this.#currentCoords = [latitude, longitude];
            this.initMap();
        });
    }

    getMovementsFromLocalStorage() {
         this.#movements = JSON.parse(localStorage.getItem("movements")) || [];
    }

    initMap(){
        this.#map = Leaflet.map('map').setView(this.#currentCoords, 13);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.#map);
        Leaflet.marker(this.#currentCoords).addTo(this.#map)
            .bindPopup('Ваше местоположение')
            .openPopup();
        this.showMarker();
        this.handleMapClick();
    }

    handleMapClick(){
        this.#map.on("click", (elem) => {
            form.style.opacity = "1";
            this.#newCoords = [elem.latlng.lat, elem.latlng.lng]; 
        });
        this.showMarker();
    }

    checkTraning(){
        const cycling = document.querySelector(".form__row--cycling");
        const running = document.querySelector(".form__row--running");
        if(inputType.value === "running" ){
            cycling.classList.add("form__row--hidden");
            running.classList.remove("form__row--hidden");
            // labelCadence.value = "Cadence";
        }
        if(inputType.value === "cycling"){
            running.classList.add("form__row--hidden");
            cycling.classList.remove("form__row--hidden");
            // labelElevGain.value = "Elev Gain";
        }
    }

    clickButton(){
        button.addEventListener("click", () =>{
            form.style.opacity = "0";
            this.dataValidation();
            this.showMarker();
            document.querySelectorAll("input").forEach(elem => elem.value = "");
        });
    }

    showMarker(){
        // console.log(this.#movements)
        this.#movements.forEach((elem) => {
            const [lat, lan] = elem.newCoords;
            Leaflet.marker([lat, lan])
                .addTo(this.#map)
                .bindPopup(`${inputType.value} on ${`${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`}`)
                .openPopup();
        });
    }

    dataValidation(){
        const type = inputType.value;
        const distance = parseInt(inputDistance.value);
        const duration = parseInt(inputDuration.value);
        const cadence = parseInt(inputCadence.value);
        const elevation = parseInt(inputElevation.value);
        const date = `${today.getDate()}.0${today.getMonth() + 1}.${today.getFullYear()}`;
        
        if(inputType.value === "cycling"){
            const newCycling = new Movements(this.#newCoords, type, distance, duration, cadence, elevation, date);
            newCycling.buildCycling();
            this.#movements.push(newCycling);
            localStorage.setItem("movements", JSON.stringify(this.#movements));
        }
        if(inputType.value === "running"){
            const newRunning = new Running (this.#newCoords, type, distance, duration, cadence, elevation, date);
            newRunning.buildRunning();
            this.#movements.push(newRunning);
            localStorage.setItem("movements", JSON.stringify(this.#movements));
        }
     
    }
    renderInitMovements(){
        this.#movements.forEach(({ newCoords, type, distance, duration, cadence, elevation, date}) => {
            if(type === "cycling"){
                const updateCycling = new Movements(newCoords, type, distance, duration, cadence, elevation, date);
                updateCycling.buildCycling();
            }
            if(type === "running"){
                const updateRunning = new Running(newCoords, type, distance, duration, cadence, elevation, date);
                updateRunning.buildRunning();
            }
        })
        // showMarker();
    }
    showCenterOfMap() {
        const li = document.querySelectorAll(".workout");
        li.forEach(elem => {
            elem.addEventListener("click", (e) => {
                this.#map.setView(JSON.parse(elem.getAttribute("data-id")), 13);
            })
        })
    }
}
new App();




