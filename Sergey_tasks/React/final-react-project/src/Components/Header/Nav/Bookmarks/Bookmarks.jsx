import React from "react";
import useLocalStorageSubscriber from "../../../../Hooks/uselocalStorageSub";
import "./main.css";
import ShowBookmarks from "./Showbookmarks/ShowBookmarks";

function Bookmarks({recipe}){
   const updateDataFromLocal = useLocalStorageSubscriber("bookmarks");
   return(
      <li className="nav__item">
         <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
               <use href="img/icons.svg#icon-bookmark"></use>
            </svg>
            <span>Bookmarks</span>
         </button>
         <div className="bookmarks">
            <ShowBookmarks updateDataFromLocal={updateDataFromLocal}></ShowBookmarks>
         </div>
      </li>
   )
}
export default Bookmarks;