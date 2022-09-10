import React, {useRef} from "react";
import "./main.css";

const Search = ({searchProps}) => {
   const inputRef = useRef();
   const handleSubmit = async () => {
      const dataInput = inputRef.current.value;
      const recipes = await getAllRecipesFromAPI(dataInput);
      searchProps(recipes);
   }

   function getAllRecipesFromAPI(dataInput) {
      return  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${dataInput}`)
                  .then(data => data.json())
                  .then(({data}) => data.recipes);
   }

   return(
      <form className="search">
         <input type="text" className="search__field"  ref={inputRef}  placeholder="Search over 1,000,000 recipes..." />
         <button type="button" className="btn search__btn" onClick = {handleSubmit} >
            <svg className="search__icon">
               <use href="./img/icons.svg#icon-search"></use>
            </svg>
            <span>Search</span>
         </button>
      </form>
   )

}
export default Search;