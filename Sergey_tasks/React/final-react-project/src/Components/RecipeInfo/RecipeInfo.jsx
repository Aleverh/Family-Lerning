import React, { useEffect, useState } from "react";
import "./main.css";
import ShowRecipe from "./ShowRecipe/ShowRecipe";


const useHash = () => {
   const [hash, setHash] = React.useState(() => window.location.hash);
   const hashChangeHandler = React.useCallback(() => {
     setHash(window.location.hash);
   }, []);
 
   React.useEffect(() => {
     window.addEventListener('hashchange', hashChangeHandler);
     return () => {
       window.removeEventListener('hashchange', hashChangeHandler);
     };
   }, []);
 
   const updateHash = React.useCallback(
     newHash => {
       if (newHash !== hash) window.location.hash = newHash;
     },
     [hash]
   );
   return [hash, updateHash];
};

function RecipeInfo({getDataRecipe}){

  const [hash] = useHash();
  const id = hash.slice(1);
  const [data,  setData] = useState();
  //  console.log(id);

  
  useEffect(() => {
    if(id){
      fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then(data  => data.json())
      .then(({data}) => setData(data.recipe));
    }
  }, [id]);

  if(data){
    return(
        <ShowRecipe data={data}  getData={getDataRecipe}></ShowRecipe>
    )
  }
}
export default RecipeInfo;