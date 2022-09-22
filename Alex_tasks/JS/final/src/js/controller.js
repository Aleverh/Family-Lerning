'use strict';

import "../sass/main.scss";
import Model from "./model";
import ListOfResults from './views/listView';
import Recipe from './views/recipeView';
import Bookmark from './views/bookmarkView';
//----------------------------------------------------------------------
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
//----------------------------------------------------------------------
const model = new Model();
const listOfResults = new ListOfResults();
const recipeView = new Recipe();
const bookmark = new Bookmark();
//----------------------------------------------------------------------
document.querySelector('.pagination').addEventListener('click', (e) => {
  app.pageSelecting(e)
});

document.querySelector('.search__btn').addEventListener('click', (e) => {
  e.preventDefault();
  app.renderList()
});

document.querySelector('.results').addEventListener('click', (e) => {
  const id = e.target.closest('.preview__link--active').getAttribute('href').slice(1);
  app.renderRecipe(id)
});

document.querySelector('.recipe').addEventListener('click', (e) => {
  e.preventDefault;
  app.servingsChoosing(e)
});

document.querySelector('.recipe').addEventListener('click', (e) => {
  if(e.target.closest('.btn--bookmark')) {
    
  }
});

//-------------------------------------------------------------------------------------------------------------------------
class App {
  constructor() {
    this.#onloadLastRecipeRendering();
    this.#onloadRenderBookmarks();
  }
  async renderList() {
    const data = await model.getResults(document.querySelector('.search__field').value);
    listOfResults.resultData = await data;
    listOfResults.pagination();
  }
  pageSelecting(e) {
    if (e.target.closest('.pagination__btn--prev')) {
      listOfResults.pagination(-1)
    };
    if (e.target.closest('.pagination__btn--next')) {
      listOfResults.pagination(1)
    };
  }
  async renderRecipe(id) {
    const data = await model.getRecipe(id);
    recipeView.data = await data;
    // console.log(data);
    recipeView.renderRecipeInfo(data);
  }
  servingsChoosing(e) {
    if (e.target.closest('.btn--increase-servings')) {
      recipeView.servingsMath(1);
    };
    if (e.target.closest('.btn--decrease-servings')) {
      if (Number(document.querySelector('.recipe__info-data--people').textContent) > 1) {
        recipeView.servingsMath(-1);
      }
    }
  }
  #onloadLastRecipeRendering() {
    const id = window.location.hash.slice(1);
    this.renderRecipe(id)
  }
  #onloadRenderBookmarks() {

  }
  addBookmark() {

  }
  removeBookmark() {

  }
}
//-------------------------------------------------------------------------------------------------------------------------
const app = new App();

// https://forkify-api.herokuapp.com/v2
// https://forkify-v2.netlify.app/
