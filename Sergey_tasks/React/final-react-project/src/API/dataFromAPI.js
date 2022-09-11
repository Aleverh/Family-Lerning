function getAllRecipesFromAPI(dataInput) {
   return  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${dataInput}`)
               .then(data => data.json())
               .then(({data}) => data.recipes);
}
export default getAllRecipesFromAPI;
