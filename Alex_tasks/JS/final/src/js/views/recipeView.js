'use strict';

class Recipe {
    constructor() {
        this.data = {};
        this.parrentNode = document.querySelector('.recipe');
        this.currentServings = '';
        this.multiplier = 1;
    }

    renderRecipeInfo(data) {
        this.parrentNode.innerHTML = '';
        this.parrentNode.insertAdjacentHTML('beforeend',
            `
            <figure class="recipe__fig">
                <img src="${data.image_url}" alt="${data.title}" class="recipe__img" />
                <h1 class="recipe__title">
                    <span>${data.title}</span>
                </h1>
            </figure>
  
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="src/img/icons.svg#icon-clock"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${data.cooking_time}</span>
                    <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                            <use href="src/img/icons.svg#icon-users"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${data.servings}</span>
                    <span class="recipe__info-text">servings</span>
  
                    <div class="recipe__info-buttons">
                        <button class="btn--tiny btn--decrease-servings">
                        <svg>
                            <use href="src/img/icons.svg#icon-minus-circle"></use>
                        </svg>
                        </button>
                        <button class="btn--tiny btn--increase-servings">
                        <svg>
                            <use href="src/img/icons.svg#icon-plus-circle"></use>
                        </svg>
                        </button>
                    </div>
                </div>
  
                <div class="recipe__user-generated">
                    <svg>
                        <use href="src/img/icons.svg#icon-user"></use>
                    </svg>
                </div>
                <button class="btn--round btn--bookmark">
                    <svg class="">
                        <use href="src/img/icons.svg#icon-bookmark-fill"></use>
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
                        <use href="src/img/icons.svg#icon-arrow-right"></use>
                    </svg>
                </a>
            </div>
            `
        );
        this.#ingredientsRender(data);
    }

    servingsMath(action) {
        const servingsNode = document.querySelector('.recipe__info-data--people');
        this.currentServings = Number(servingsNode.textContent);
        const newServings = this.currentServings + action;
        servingsNode.textContent = newServings;
        this.#ingredientsMath(newServings);
    }

    #ingredientsMath(servings) {
        const currentQuantities = Array.from(document.getElementsByClassName('recipe__quantity'));
        const newMultiplier = (servings / this.data.servings).toFixed(2);
        currentQuantities.forEach(element => {
            element.textContent = (Number(element.textContent) / this.multiplier * newMultiplier).toFixed(2);
        });
        this.multiplier = newMultiplier;
    }

    #ingredientsRender(data) {
        data.ingredients.forEach(data => {
            document.querySelector('.recipe__ingredient-list').insertAdjacentHTML('beforeend',
                `
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                        <use href="src/img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${data.quantity}</div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${data.unit}</span>
                            ${data.description}
                    </div>
                </li>
                `
            )
        });
    }

    set recipeData(data) {
        this.data = data;
    }

    get recipeData() {
        return this.data;
    }
};

export default Recipe;

/*--------recipe data----------
cooking_time
id
image_url
[ingredients]
publisher
servings
source_url
title
------------------------------*/