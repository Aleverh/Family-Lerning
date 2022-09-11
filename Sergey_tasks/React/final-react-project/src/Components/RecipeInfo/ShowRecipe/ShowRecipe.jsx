import React, {useState} from "react";
import useLocalStorage from "../../../Hooks/useLocalstorage";
import "./main.css";
import ShowIngredients from "./ShowIngredients/ShowIngredients";

function ShowRecipe({data}){
   const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

   function bookmarkTheRecipe(){
      if(bookmarks.length > 0){
         const indexRecipe = bookmarks.findIndex(elem => elem.id === data.id);
         if(indexRecipe >= 0){
            bookmarks.splice(indexRecipe, 1);
            setBookmarks(bookmarks);
         }
         else {
            bookmarks.push(data);
            setBookmarks(bookmarks);
         }
      } else  setBookmarks((prevValue) => [...prevValue, data]);
   }

   return(
      <div className="recipe">
         <figure className="recipe__fig">
            <img src={data.image_url} alt={data.publisher} className="recipe__img" />
            <h1 className="recipe__title"><span>{data.title}</span></h1>
         </figure>
         <div className="recipe__details">
            <div className="recipe__info">
               <svg className="recipe__info-icon"><use href="${icons}#icon-clock"></use></svg>
               <span className="recipe__info-data recipe__info-data--minutes">{data.cooking_time}</span>
               <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
               <svg className="recipe__info-icon"><use href="${icons}#icon-users"></use></svg>
               <span className="recipe__info-data recipe__info-data--people">4</span>
               <span className="recipe__info-text">servings</span>
               <div className="recipe__info-buttons">
                  <button className="btn--tiny btn--increase-servings-minus">
                     <svg><use href="${icons}#icon-minus-circle"></use></svg>
                  </button>
                  <button className="btn--tiny btn--increase-servings-plus">
                     <svg><use href="${icons}#icon-plus-circle"></use></svg>
                  </button>
               </div>
            </div>
            <div className="recipe__user-generated">
               <svg><use href="${icons}#icon-user"></use></svg>
            </div>
            <button className="btn--round btn--bookmark" onClick={bookmarkTheRecipe}>
            </button>
         </div>
         <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>

            <ShowIngredients data={data}></ShowIngredients>

         </div>
         <div className="recipe__directions">
            <h2 className="heading--2">How to cook it</h2>
            <p className="recipe__directions-text">
               This recipe was carefully designed and tested by
               <span className="recipe__publisher">The Pioneer Woman</span>. Please check out
               directions at their website.
            </p>
            <a className="btn--small recipe__btn"
               href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
               target="_blank">
               <span>Directions</span>
               <svg className="search__icon"><use href="${icons}#icon-arrow-right"></use></svg>
            </a>
         </div>
         <div className="message">
            <div>
               <svg><use href="img/icons.svg#icon-smile"></use></svg>
            </div>
            <p>Start by searching for a recipe or an ingredient. Have fun!</p>
         </div>
         <div className="spinner">
            <svg><use href="img/icons.svg#icon-loader"></use></svg>
         </div> 

         {/* <div class="error">
            <div>
               <svg>
                  <use href="src/img/icons.svg#icon-alert-triangle"></use>
               </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
         </div> */}
      </div>

            
   )
}
export default ShowRecipe;