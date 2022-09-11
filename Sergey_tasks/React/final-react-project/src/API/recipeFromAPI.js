function getRecipeFromAPI(id){
   return   fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      .then(data  => data.json())
      .then(({data}) => (data.recipe));
}
export default getRecipeFromAPI;