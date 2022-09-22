'use strict';

class Model {
    async getResults(name) {
        const data = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`);
        const res = await data;
        const res_1 = await res.json();
        return res_1.data.recipes;
    }
    async getRecipe(id) {
        const data = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const result = await data;
        const result_2 = await result.json();
        return result_2.data.recipe;
    }
};
export default Model;