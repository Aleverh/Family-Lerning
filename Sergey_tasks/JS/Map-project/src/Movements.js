import { containerWorkouts } from './const';

class Movements {
   constructor(newCoords, type, distance, duration, cadence, elevation, date){
      this.type = type;
      this.distance = distance;
      this.duration = duration;
      this.cadence = cadence;
      this.elevation = elevation;
      this.newCoords = newCoords;
      this.date = date;
   }

   buildCycling(){
         containerWorkouts.innerHTML +=
         `
            <li class="workout workout--cycling" data-id="${JSON.stringify(this.newCoords)}">
                     <h2 class="workout__title">${this.type} on ${this.date}</h2>
                     <div class="workout__details">
                        <span class="workout__icon"> 🚴‍♀️</span>
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
                        <span class="workout__value">${this.distance / this.duration}</span>
                        <span class="workout__unit">km/h</span>
                     </div>
                     <div class="workout__details">
                        <span class="workout__icon">⛰</span>
                        <span class="workout__value">${this.elevation}</span>
                        <span class="workout__unit">m</span>
                     </div>
            </li>
         `
   }
}

export default Movements;