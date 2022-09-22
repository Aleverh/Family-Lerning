import React, { useState, useEffect } from 'react';
import '../img/icons.svg';
import { useHash } from '../App';

//------------------------------
function DefaultLoading() {
    return (
        <div className='recipe'>
            <div className="message">
                <div>
                    <svg>
                        <use href="../img/icons.svg#icon-smile"></use>
                    </svg>
                </div>
                <p>Start by searching for a recipe or an ingredient. Have fun!</p>
            </div>
        </div>
    )
}
//------------Ingredient--------
function Ingredient({ quantity, unit, description, multiplier }) {
    return (
        <li className="recipe__ingredient">
            <svg className="recipe__icon">
                <use href="../img/icons.svg#icon-check"></use>
            </svg>
            <div className="recipe__quantity">{(quantity * multiplier).toFixed(2)}</div>
            <div className="recipe__description">
                <span className="recipe__unit">{unit} </span>
                {description}
            </div>
        </li>
    )
}
//------------IngredientsList---
const IngredientsList = ({ ingredients, recipeServings, servingsChanged }) => {
    const multiplier = (servingsChanged / recipeServings).toFixed(2);
    return (
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
                {ingredients.map(item =>
                    <Ingredient
                        key={item.description}
                        quantity={item.quantity}
                        unit={item.unit}
                        description={item.description}
                        multiplier={multiplier}
                    />
                )}
            </ul>
        </div>
    )
}
//------------RecipeRender------
function RecipeRender({ recipeData }) {
    const [servings, setServings] = useState(Number(recipeData.servings))
    function handleClick(action) {
        const check = servings + action
        if (check !== 0) {
            setServings(servings + action)
        }
    }
    return (
        <>
            <figure className="recipe__fig">
                <img src={recipeData.image_url} alt="{recipeData.title}" className="recipe__img" />
                <h1 className="recipe__title">
                    <span>{recipeData.title}</span>
                </h1>
            </figure>

            <div className="recipe__details">
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="../img/icons.svg#icon-clock"></use>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--minutes">{recipeData.cooking_time}</span>
                    <span className="recipe__info-text">minutes</span>
                </div>
                <div className="recipe__info">
                    <svg className="recipe__info-icon">
                        <use href="../img/icons.svg#icon-users"></use>
                    </svg>
                    <span className="recipe__info-data recipe__info-data--people">{servings}</span>
                    <span className="recipe__info-text">servings</span>

                    <div className="recipe__info-buttons">
                        <button
                            className="btn--tiny btn--decrease-servings"
                            onClick={() => { handleClick(-1) }}
                        >
                            <svg>
                                <use href="../img/icons.svg#icon-minus-circle"></use>
                            </svg>
                        </button>
                        <button
                            className="btn--tiny 
                            btn--increase-servings"
                            onClick={() => { handleClick(1) }}
                        >
                            <svg>
                                <use href="../img/icons.svg#icon-plus-circle"></use>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="recipe__user-generated">
                    <svg>
                        <use href="../img/icons.svg#icon-user"></use>
                    </svg>
                </div>
                <button className="btn--round">
                    <svg className="">
                        <use href="../img/icons.svg#icon-bookmark-fill"></use>
                    </svg>
                </button>
            </div>

            <IngredientsList
                ingredients={recipeData.ingredients}
                recipeServings={recipeData.servings}
                servingsChanged={servings}
            />
            <div className="recipe__directions">
                <h2 className="heading--2">How to cook it</h2>
                <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span className="recipe__publisher"> {recipeData.publisher}</span>. Please check out
                    directions at their website.
                </p>
                <a
                    className="btn--small recipe__btn"
                    href={recipeData.source_url}
                    target="_blank" rel="noreferrer"
                >
                    <span>Directions</span>
                    <svg className="search__icon">
                        <use href="../img/icons.svg#icon-arrow-right"></use>
                    </svg>
                </a>
            </div>
        </>
    )
}
//------------------------------
function Recipe() {
    const [recipeData, setRecipeData] = useState(0)
    const [hash] = useHash(0);
    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hash.slice(1)}`)
            .then(response => response.json())
            .then(result => setRecipeData(result.data.recipe))
            .catch(setRecipeData(0))
    }, [hash])
return (
    <div className='recipe'>
        {recipeData ? <RecipeRender recipeData={recipeData} /> : <DefaultLoading />}
    </div>
)
}

export default Recipe;