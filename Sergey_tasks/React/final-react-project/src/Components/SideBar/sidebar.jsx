import React, {useState} from "react";
import "./main.css";
import RenderRecipes from "./RenderRecipes/RenderRecipes";
import Pagination from "./Pagination/Pagination";
import {rowsRecipe,  countPages, currentPage, start, end, paginationRenderRecipe } from "../../const";

let paginationRenderRecipes;

function Sidebar({recipes}){
   const [recipesFromPagination, setRecipesFromPagination] = useState(null);

   if(recipesFromPagination != null){
      paginationRenderRecipes = recipesFromPagination;
   }
   else paginationRenderRecipes = recipes.slice(start, end);

   return(
      <div className="search-results">
         <div className="spinner">
            <svg><use href="img/icons.svg#icon-loader"></use></svg>
         </div>   

         <RenderRecipes paginationRenderRecipe={paginationRenderRecipes}></RenderRecipes>
         <Pagination recipes={recipes} fromPagination={setRecipesFromPagination} paginationRenderRecipe={paginationRenderRecipes}></Pagination>

         <p className="copyright">&copy; Copyright by
            <a className="twitter-link" target="_blank"
               href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann</a
            >. Use for learning or your portfolio. Don't use to teach. Don't claim
            as your own.
         </p>
      </div>
      
   )
}
export default Sidebar;
