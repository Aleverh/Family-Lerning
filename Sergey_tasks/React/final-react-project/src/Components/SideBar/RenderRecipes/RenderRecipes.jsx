import React, {useState} from "react";
import "./main.css"

function RenderRecipes({paginationRenderRecipe}){
   // console.log(paginationRenderRecipe);

   return(
      <ul className="results" >
         {paginationRenderRecipe.map(elem => (
            <li className="preview" key={elem.id}>
               <a className="preview__link preview__link--active" href={`#${elem.id}`}>
                  <figure className="preview__fig">
                     <img src={elem.image_url} alt={elem.title}/>
                  </figure>
                  <div className="preview__data">
                     <h4 className="preview__title">{elem.title}</h4>
                     <p className="preview__publisher">{elem.publisher}</p>
                     <div className="preview__user-generated">
                        <svg><use href="${icons}#icon-user"></use></svg>
                     </div>
                  </div>
               </a>
            </li>
         ))}         
      </ul>
   )
}
export default RenderRecipes;



