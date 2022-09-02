'use strict';
import "../sass/main.scss";
import Bookmarks from "./views/bookmarks";
import LoaderIcon from '../img/icons.svg';

import ViewRecipe from './views/viewRecipe';
import Model from "./model";
import ViewAllRecipes from "./views/viewAllRecipes";
import {allRecipes, recipeContainer, bookmarks, bookmarksList} from "./constants.js";
import Pagination from "./views/pagination";
import Spinner from "./views/spiner";
const axios = require('axios');
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const searchBtn = document.querySelector('.search__btn');
const searchInputValue = document.querySelector('.search__field')
const bookmarksClass = new Bookmarks();
const spinner = new Spinner();
const model = new Model();
const viewAllRecipes = new ViewAllRecipes();
const viewRecipe = new ViewRecipe();
const pagination = new Pagination();
class App {
    constructor() {
        this.searchAllRecipe();
        bookmarksClass.renderError();
        bookmarksClass.renderAddBookmark(JSON.parse(localStorage.getItem('allBookmarks')));
        this.moreRecipeInfo();
    };
    searchBtnFunc() {
        if (typeof searchInputValue.value === 'string' && searchInputValue.value.length > 0) {
            allRecipes.innerHTML = "";
            this.createAllRecipes(searchInputValue.value);
            pagination.viewPagination();
            spinner.render(allRecipes);
            searchInputValue.value = "";
        }
    };
    searchAllRecipe(){
                searchBtn.addEventListener('click', () => this.searchBtnFunc());
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault()
                        this.searchBtnFunc();
                    }
                });
    };
    buttonPagination(array){
        const btnLeft = document.querySelector('.pagination__btn--prev');
        const btnRight = document.querySelector('.pagination__btn--next');
        const textBtnRight = document.querySelector(".btn--next-text")
        const textBtnLeft = document.querySelector(".btn--prev-text");
        btnLeft.style.display = "none";
        let visiblyArr;
        let r = 2;
        let l = 0;
        let i = 10;
        btnRight.addEventListener('click', () => {
            if ((array.length - i) >= 0){
                allRecipes.innerHTML = "";
                function qqq() {
                    if (i < 10) {
                        i = i + 10
                    } else return i;
                }
                visiblyArr = array.slice(qqq(), (i = qqq() + 10));
                viewAllRecipes.render(visiblyArr);
                btnLeft.style.display = "block";
                textBtnRight.textContent = `Page ${r = r + 1}`;
                textBtnLeft.textContent = `Page ${l = l + 1}`;
                this.moreRecipeInfo();
                if (i > array.length){
                    btnRight.style.display = "none";
                }
            }
        })
        btnLeft.addEventListener('click', () => {
            if (i > 10) {
                allRecipes.innerHTML = "";
                visiblyArr = array.slice((i - 20), (i - 10));
                viewAllRecipes.render(visiblyArr)
                i = i - 10;
                btnRight.style.display = "block";
                textBtnLeft.textContent = `Page ${l = l - 1}`;
                textBtnRight.textContent = `Page ${r = r - 1}`;
                this.moreRecipeInfo();
                if (i === 10) {
                    btnLeft.style.display = "none";
                }
            }
        })
    }
    createAllRecipes(dishes) {
        model.getRecipeData(dishes)
            .then((recipes) => {
                if (recipes.length <= 0) {
                    allRecipes.innerHTML = `
                           <div class="error">
                             <div>
                                 <svg>
                                     <use href="${LoaderIcon}#icon-alert-triangle"></use>
                                 </svg>
                             </div>
                             <p>No recipes found for your query. Please try again!</p>
                           </div>
`
                } else {
                    allRecipes.innerHTML = ``;
                    this.buttonPagination(recipes)
                    recipes = recipes.slice(0, 10);
                    viewAllRecipes.render(recipes)
                }
            }).then(this.moreRecipeInfo)
    }
    addBookmarks(dish) {
        console.log(document.querySelector('.btn--round'))
        document.querySelector('.btn--round')
        .addEventListener('click', () => {
                const allBookmarks = JSON.parse(localStorage.getItem('allBookmarks')) || [];
                bookmarksList.innerHTML = ``;
                if (allBookmarks.find(item => item.id === dish.id) !== undefined) {
                    document.getElementById('icon-bookmark').innerHTML = `
                        <use  href="${LoaderIcon}#icon-bookmark"></use>
                    `
                    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks
                        .filter(item => item.id !== dish.id)));
                    bookmarksClass.renderAddBookmark(JSON.parse(localStorage.getItem('allBookmarks')));
                } else {
                    document.getElementById('icon-bookmark').innerHTML = `
                        <use  href="${LoaderIcon}#icon-bookmark-fill"></use>
                    `
                    allBookmarks.push(dish);
                    localStorage.setItem('allBookmarks', JSON.stringify(allBookmarks));
                    bookmarksClass.renderAddBookmark(JSON.parse(localStorage.getItem('allBookmarks')));
                }
                this.moreRecipeInfo()
            })
    }
    moreRecipeInfo = () => {
        let f = false;
        const allDishes = document.querySelectorAll('.preview');
        function checkBookmarks(recipe, elem){
            if (JSON.parse(localStorage.getItem('allBookmarks'))){
                if (JSON.parse(localStorage.getItem('allBookmarks')).length > 0){
                    JSON.parse(localStorage.getItem('allBookmarks')).forEach(e => {
                        if (e.id === elem.id) {
                            f = true;
                            viewRecipe.render(recipe, '#icon-bookmark-fill');
                        }
                    })
                    if (f === false) {
                        viewRecipe.render(recipe, '#icon-bookmark')
                    }
                }

            } else {
                viewRecipe.render(recipe, '#icon-bookmark')
            }
            f = false;
        }

        if (window.location.hash){
            console.log(window.location.hash)
            model.getAllInfoAboutRecipe(window.location.hash.slice(1))
                .then((recipe) => {
                    checkBookmarks(recipe, recipe)
                    this.addBookmarks(recipe)
                    this.changeQuantityServings(recipe)
                })
        }
            allDishes.forEach(elem => {
                elem.addEventListener('click', () => {
                    spinner.render(recipeContainer);
                    model.getAllInfoAboutRecipe(elem.id)
                        .then((recipe) => {
                            checkBookmarks(recipe, elem)
                            this.addBookmarks(recipe)
                            this.changeQuantityServings(recipe)
                        })
                })
            })
    }
    changeQuantityServings(elem) {
        const minus = document.getElementById('minus-circle');
        const plus = document.getElementById('plus-circle');
        const servings = document.querySelector('.recipe__info-data--people');
        console.log(elem);
        let servingsQuantity = elem.servings;
        let check = elem.servings;
        let a = [];
        let i = -1;
        function checkQuantity() {
            if (a.length > 0){
                return a;
            } else {
                elem.ingredients.forEach(e => {
                    if (e.quantity !== null) {
                        a.push(e.quantity / servingsQuantity);
                    }
                });
                return a;
            }
        }
        plus.addEventListener('click', () => {
            check = check + 1;
            servings.textContent = check;
            document.querySelectorAll('.recipe__quantity')
                .forEach(element => {
                    if (element.textContent === '') {
                    } else {
                        checkQuantity();
                        element.textContent = `${Number(element.textContent) + a[i = ++i]}`
                    }
                })
            i = -1;
        })
        minus.addEventListener('click', () => {
        if (check - 1 > 0) {
            check = check - 1;
            servings.textContent = check;
            document.querySelectorAll('.recipe__quantity')
                .forEach(element => {
                    if (element.textContent === '') {
                    } else {
                        checkQuantity();
                        element.textContent = `${Number(element.textContent) - a[i = ++i]}`
                    }
                })
            i = -1;
        }
        })
    }
}
new App();
// https://forkify-api.herokuapp.com/v2
// https://forkify-v2.netlify.app/























