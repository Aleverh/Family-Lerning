'use strict';
// import logo from '../img/logo.png'
// document.getElementById('logo').src = logo;
// import;
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
        if (typeof searchInputValue.value === 'string') {
            console.log(searchInputValue.value);
            allRecipes.innerHTML = "";
            this.createAllRecipes(searchInputValue.value);
            searchInputValue.value = "";
            pagination.viewPagination();
            spinner.render(allRecipes);
        }
    };
    searchAllRecipe(){
                searchBtn.addEventListener('click', () => this.searchBtnFunc());
                document.addEventListener('keydown', (e) => {
                    if (e.key === "Enter") {
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
        const allDishes = document.querySelectorAll('.preview');
        if (allDishes.length === 0){
            model.getAllInfoAboutRecipe(window.location.hash.slice(1))
                .then((recipe) => {
                    viewRecipe.render(recipe);
                    this.addBookmarks(recipe)
                    this.changeQuantityServings(recipe)
                })
        } else {
            allDishes.forEach(elem => {
                elem.addEventListener('click', () => {
                    spinner.render(recipeContainer);
                    model.getAllInfoAboutRecipe(elem.id)
                        .then((recipe) => {
                            JSON.parse(localStorage.getItem('allBookmarks')).forEach(e => {
                                if (elem.id === e.id){
                                    console.log(LoaderIcon + '#icon-bookmark-fill');
                                    viewRecipe.render(recipe, '#icon-bookmark-fill');
                                } else {
                                    console.log(elem);
                                    viewRecipe.render(recipe, '#icon-bookmark')
                                }
                            })
                            // viewRecipe.render(recipe);
                            this.addBookmarks(recipe)
                            this.changeQuantityServings(recipe)
                        })
                })
            })
        }
    }
    changeQuantityServings(elem) {
        const minus = document.getElementById('minus-circle');
        const plus = document.getElementById('plus-circle');
        const servings = document.querySelector('.recipe__info-data--people');
        let servingsQuantity = 4;
        let a;
        let check = false;
        function checkQuantity(element) {
            if (a !== undefined) {
                return a
            } else {
                a = element.textContent / 4;
                return a
            }
        }
        plus.addEventListener('click', () => {
            check = false;
            servingsQuantity = servingsQuantity + 1;
            servings.textContent = servingsQuantity;
            console.log(check);
            document.querySelectorAll('.recipe__quantity')
                .forEach(element => {
                    if (element.textContent === ''){

                    } else {
                        element.textContent = `${Number(element.textContent) + checkQuantity(element)}`;
                    }
                })
        })
            minus.addEventListener('click', () => {
                document.querySelectorAll('.recipe__quantity')
                    .forEach(element => {
                        console.log(element);
                        if (element.textContent === ''){

                        } else if (Number(element.textContent) - checkQuantity(element) > 0 && check === false){
                            element.textContent = `${Number(element.textContent) - checkQuantity(element)}`;
                        } else {
                            check = true;
                            console.log(servingsQuantity);

                        }
                    })
                // function alert() {
                //     if (check === true){
                //
                //     }
                // }
                // alert()
                if (check === false){
                    servingsQuantity = servingsQuantity - 1;
                    servings.textContent = servingsQuantity;
                }
            })
    }
}
new App();
// https://forkify-api.herokuapp.com/v2
// https://forkify-v2.netlify.app/























