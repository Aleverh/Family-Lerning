import { recipeContainer } from '../constants';
import LoaderIcon from '../../img/icons.svg';
import View from "./spiner";

class ViewRecipe extends View {
    render(data, icon){
        recipeContainer.innerHTML = `
         <figure class="recipe__fig">
              <img src="${data.image_url}" alt="Tomato" class="recipe__img" />
              <h1 class="recipe__title">
                <span>${data.title}</span>
              </h1>
            </figure>

            <div class="recipe__details">
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${LoaderIcon}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${data.cooking_time}</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${LoaderIcon}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--increase-servings" id="minus-circle">
                    <svg>
                      <use href="${LoaderIcon}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--increase-servings" id="plus-circle">
                    <svg>
                      <use href="${LoaderIcon}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="recipe__user-generated">
                <svg>
                  <use href="${LoaderIcon}#icon-user"></use>
                </svg>
              </div>
              <button class="btn--round">
                <svg id="icon-bookmark">
                  <use  href="${LoaderIcon + icon}"></use>
                </svg>
              </button>
            </div>

            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list"></ul>
            </div>

            <div class="recipe__directions">
              <h2 class="heading--2">How to cook it</h2>
              <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${data.publisher}</span>. Please check out
                directions at their website.
              </p>
              <a
                class="btn--small recipe__btn"
                href="${data.source_url}"
                target="_blank"
              >
                <span>Directions</span>
                <svg class="search__icon">
                  <use href="${LoaderIcon}#icon-arrow-right"></use>
                </svg>
              </a>
            </div>
        `
        data.ingredients.forEach(elem => {
           const ingredientsContainer = document.querySelector(".recipe__ingredient-list")
            function checkQuantity() {
               if(elem.quantity === null) {
                   return ""
               }
               else {
                   return elem.quantity;
               }
            }
            ingredientsContainer.innerHTML +=
            `<li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${LoaderIcon}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${checkQuantity()}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${elem.unit}</span>
                    ${elem.description}
                  </div>
                </li>
            `
        })
    }
}
export default ViewRecipe;