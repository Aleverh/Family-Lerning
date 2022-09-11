import React from "react";
import "./main.css";

function ShowBookmarks({updateDataFromLocal}){
   if(updateDataFromLocal){
      return(
         <ul className="bookmarks__list">
            {updateDataFromLocal.map(elem => (
               <li className="preview" key={elem.id}>
                  <a className="preview__link preview__link--active" href={`#${elem.id}`}>
                     <figure className="preview__fig">
                        <img src={elem.image_url} alt={elem.title}/>
                     </figure>
                     <div className="preview__data">
                        <h4 className="preview__title">{elem.title}</h4>
                        <p className="preview__publisher">{elem.publisher}</p>
                     </div>
                  </a>
               </li>
            ))}
       
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
