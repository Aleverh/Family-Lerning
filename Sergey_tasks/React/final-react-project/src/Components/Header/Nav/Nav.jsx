import React from "react";
import "./main.css";
import AddRecipe from "./AddRecipe/AddRecipe";
import Bookmarks from "./Bookmarks/Bookmarks";

function Nav({recipe}){
   // console.log(recipe);
   return(
      <nav className="nav">
         <ul className="nav__list">
            <AddRecipe></AddRecipe>
            <Bookmarks recipe={recipe}></Bookmarks>
         </ul>
      </nav>
      
   )
}
export default Nav;