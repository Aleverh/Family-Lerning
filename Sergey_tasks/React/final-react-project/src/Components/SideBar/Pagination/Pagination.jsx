import React from "react";
import "./main.css";
// import {rowsRecipe,  currentPage, start, en} from "./const";

const rowsRecipe = 6;
let currentPage = 1;
let start = 0;
let end = rowsRecipe;

function Pagination({recipes, fromPagination, paginationRenderRecipe }){
   let showBattonPagination;

   let countPages = Math.ceil((recipes.length)/rowsRecipe);
   const nextRecipes = () => {
      currentPage = currentPage + 1;
      if(currentPage <= countPages){
         start = rowsRecipe * (currentPage - 1);
         end = start + rowsRecipe
         let recipesFromPagination = recipes.slice(start, end);
         fromPagination(recipesFromPagination);
      }
   }

   const prevRecipes = () => {
      currentPage = currentPage - 1;
      if(currentPage >= 1){
         end = rowsRecipe * currentPage;
         start = end - rowsRecipe;
         let recipesFromPagination = recipes.slice(start, end);
         fromPagination(recipesFromPagination);
      }
   }

   const buttonNext = <button className="btn--inline pagination__btn--next" onClick={nextRecipes}>
                        <span className="pagination__spam--next">Page  {currentPage + 1}</span>
                        <svg className="search__icon"><use href="img/icons.svg#icon-arrow-right"></use></svg>
                      </button> 
   const buttonPrev = <button className="btn--inline pagination__btn--prev" onClick={prevRecipes}>
                        <svg className="search__icon"><use href="img/icons.svg#icon-arrow-left"></use></svg>
                        <span className="pagination__spam--prev">Page  {currentPage - 1}</span>
                      </button>  
   
   if(paginationRenderRecipe.length !=0 && currentPage <= countPages){
      showBattonPagination = buttonNext;
   }
   if(currentPage > 1){
      showBattonPagination =  buttonPrev;   
   }
   if( currentPage < countPages &&  currentPage >= 2){
      showBattonPagination = [buttonNext, buttonPrev];
   }
   return(
      <div className="paginatio">
         {showBattonPagination}
      </div>
   )
}
export default Pagination;






