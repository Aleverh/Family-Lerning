import React, { useEffect, useState } from "react";
import useHash from "../../Hooks/useHash";
import getRecipeFromAPI from "../../API/recipeFromAPI";
import "./main.css";
import ShowRecipe from "./ShowRecipe/ShowRecipe";

function RecipeInfo(){

  const [hash] = useHash();
  const id = hash.slice(1);
  const [data,  setData] = useState();

  useEffect(() => {
    if(id){
      const getDataFromAPI = async()=>{
        const recipeFromAPI = await getRecipeFromAPI(id);
        setData(recipeFromAPI);
      }
      getDataFromAPI();
    }
  }, [id]);
 
  if(data){
    return(
        <ShowRecipe data={data}></ShowRecipe>
    )
  }
}
export default RecipeInfo;


//   if(id){ 
  //   fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
  //     .then(data  => data.json())
  //     .then(({data}) => setData(data.recipe));
  //   }
