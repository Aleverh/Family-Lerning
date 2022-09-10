import React, {useState} from "react";
import "./main.css";

function ShowBookmarks({updateDataFromLocal}){
   if(updateDataFromLocal){
      return(
         <ul className="bookmarks__list">
            <li className="preview" key={updateDataFromLocal.id}>
               <a className="preview__link preview__link--active" href={`#${updateDataFromLocal.id}`}>
                  <figure className="preview__fig">
                     <img src={updateDataFromLocal.image_url} alt={updateDataFromLocal.title}/>
                  </figure>
                  <div className="preview__data">
                     <h4 className="preview__title">{updateDataFromLocal.title}</h4>
                     <p className="preview__publisher">{updateDataFromLocal.publisher}</p>
                  </div>
               </a>
            </li>
         </ul>
      )
   }
   else return(
      <div className="message">
         <div>
            <svg><use href="img/icons.svg#icon-smile"></use></svg>
         </div>
         <p>No bookmarks yet. Find a nice recipe and bookmark it :</p>
      </div>
   )
}
export default ShowBookmarks;
