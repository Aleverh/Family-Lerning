import Model from "./model";
import RecipeView from "./views";

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const model = new Model();
const recipeView = new RecipeView();
class App {
    constructor() {
      this.createRecipe();
    }

    createRecipe = () => {
        model.getRecipeData().then((data) => recipeView.render(data));

      recipeView.render(data);
    }
}

// https://forkify-api.herokuapp.com/v2
// https://forkify-v2.netlify.app/


