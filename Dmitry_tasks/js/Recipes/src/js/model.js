import axios from "axios";

class Model {
    getRecipeData(dishes) {
        return axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${dishes}`)
            .then(({ data }) => data.data.recipes)
    }
    getAllInfoAboutRecipe(id){
        return axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            .then(({ data }) => data.data.recipe)
    }
}
export default Model;
