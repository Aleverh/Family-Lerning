import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./main.css";


function ShowIngredients({data}){
   // console.log(data);

   const ingredients = data.ingredients.map(elem => ({
      id: uuidv4(),
      ...elem,
   }));

   return(
      <ul className="recipe__ingredient-list">
         { ingredients.map(elem => (
            <li className="recipe__ingredient" key={elem.id}>
               <svg className="recipe__icon">
                  <use href="${icons}#icon-check"></use>
               </svg>
               <div className="recipe__quantity">{elem.quantity}</div>
               <div className="recipe__description">
                  <span className="recipe__unit">{elem.unit}  </span>{elem.description}
               </div>
            </li> 
         ))}              
      </ul>
   )
}
export default ShowIngredients;
