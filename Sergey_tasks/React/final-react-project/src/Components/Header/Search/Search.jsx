import React, {useRef} from "react";

import getAllRecipesFromAPI from "../../../API/dataFromAPI";
import "./main.css";

const Search = ({searchProps}) => {
   const inputRef = useRef();
   
   const handleSubmit = async (event) => {
      event.preventDefault();
      const dataInput = inputRef.current.value;
      const recipes = await getAllRecipesFromAPI(dataInput);
      searchProps(recipes);
   }

   return(
      <form className="search" onSubmit={handleSubmit}>
         <input type="text" className="search__field"  ref={inputRef}  placeholder="Search over 1,000,000 recipes..." />
         <button type="submit" className="btn search__btn">
            <svg className="search__icon">
               <use href="./img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
         </button>
      </form>
   )
}
export default Search;