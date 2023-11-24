import LoaderIcon from '../img/icons.svg';
import React, {useEffect, useState} from 'react'
import axios from "axios";
const useHash = () => {
    const [hash, setHash] = React.useState(() => window.location.hash);

    const hashChangeHandler = React.useCallback(() => {
        setHash(window.location.hash);
    }, []);

    React.useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler);
        };
    }, []);

    const updateHash = React.useCallback(
        newHash => {
            if (newHash !== hash) window.location.hash = newHash;
        },
        [hash]
    );
    return [hash, updateHash];
};
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);

            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }

            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}
const ChangeQuantityServings = ({ elem }) => {
        const [check, setCheck] = useState(elem.servings);
        let servingsQuantity = elem.servings;
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
        const plus = () => {
            setCheck(prevValue => ++prevValue)
            document.querySelectorAll('.recipe__quantity')
                .forEach(element => {
                    if (element.textContent === '') {
                    } else {
                        checkQuantity();
                        element.textContent = `${Number(element.textContent) + a[i = ++i]}`
                    }
                })
            i = -1;
        }
        const minus = () => {
        if (check - 1 > 0) {
            setCheck(prevValue => --prevValue);
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
        }
    return(
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href={LoaderIcon + `#icon-users`}></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">{check}</span>
            <span className="recipe__info-text">servings</span>
            <div className="recipe__info-buttons">
                <button className="btn--tiny btn--increase-servings" id="minus-circle" onClick={minus}>
                    <svg>
                        <use href={`${LoaderIcon}#icon-minus-circle`}></use>
                    </svg>
                </button>
                <button className="btn--tiny btn--increase-servings" id="plus-circle" onClick={plus}>
                    <svg>
                        <use href={`${LoaderIcon}#icon-plus-circle`}></use>
                    </svg>
                </button>
            </div>
        </div>
    )
    };
const CheckBookmarks = ({ recipe }) => {
    const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);
    function addOrRemoveBookmark(){
        setBookmarks(prevState => {
            if (prevState.find(item => item.id === recipe.id)){
                const aaa = prevState.filter(item => item.id !== recipe.id);
                return (aaa);
            } else {
                if (prevState.length > 0){
                    return ([...prevState, recipe]);
                } else return([recipe]);
            }
        });
    }
    const isSelected = bookmarks.find(item => item.id === recipe.id);
    const imageUrl = `${LoaderIcon}#icon-bookmark${isSelected ? '-fill' : ''}`;
    return (
        <button className="btn--round" onClick={addOrRemoveBookmark}>
            <svg id="icon-bookmark">
                <use href={imageUrl}></use>
            </svg>
        </button>
    );
};
const RenderIngredients = ({ recipe }) => {
    return (recipe.ingredients.map(elem => {
        function checkQuantity() {
            if (elem.quantity === null) {
                return ""
            } else {
                return elem.quantity;
            }
        }
        return (
            <li className="recipe__ingredient" key={Math.random() + Math.random()}>
                <svg className="recipe__icon">
                    <use href={LoaderIcon + '#icon-check'}></use>
                </svg>
                <div className="recipe__quantity">{checkQuantity()}</div>
                <div className="recipe__description">
                    <span className="recipe__unit">{elem.unit}</span>
                    {elem.description}
                </div>
            </li>
        )
    }))
};
const ViewRecipe = () => {
    const [hash] = useHash();
    const [recipe, setRecipe] = useState(null)
    useEffect(() => {
        if (window.location.hash){
            axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${hash.slice(1)}`)
                .then(({ data }) => data.data.recipe)
                    .then(setRecipe)
        }

    }, [hash])

    if (recipe){
        return(
            <div className="recipe">
                <figure className="recipe__fig">
                <img src={recipe.image_url} alt="Tomato" className="recipe__img"/>
                <h1 className="recipe__title">
                  <span>{recipe.title}</span>
                </h1>
                </figure>

                <div className="recipe__details">
                <div className="recipe__info">
                <svg className="recipe__info-icon">
                <use href={LoaderIcon + '#icon-clock'}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--minutes">{recipe.cooking_time}</span>
                <span className="recipe__info-text">minutes</span>
                </div>

                    <ChangeQuantityServings elem={recipe}/>

                    <div className="recipe__user-generated">
                <svg>
                <use href={LoaderIcon + `#icon-user`}></use>
                </svg>
                </div>
                <CheckBookmarks recipe={recipe}/>
                </div>

                <div className="recipe__ingredients">
                    <h2 className="heading--2">Recipe ingredients</h2>
                    <ul className="recipe__ingredient-list">
                    <RenderIngredients recipe={recipe}/>
                    </ul>
                </div>

                <div className="recipe__directions">
                    <h2 className="heading--2">How to cook it</h2>
                    <p className="recipe__directions-text">
                        This recipe was carefully designed and tested by
                        <span className="recipe__publisher">{recipe.publisher}</span>. Please check out
                        directions at their website.
                    </p>
                    <a className="btn--small recipe__btn" href={recipe.source_url} target="_blank">
                        <span>Directions</span>
                        <svg className="search__icon">
                            <use href={LoaderIcon + `#icon-arrow-right`}></use>
                        </svg>
                    </a>
                </div>
            </div>
        )

    }return (
            <div className="recipe">
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
};
export default ViewRecipe;