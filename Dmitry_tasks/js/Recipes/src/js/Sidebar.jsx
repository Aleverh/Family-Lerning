import React, {useEffect, useState} from "react";
import LoaderIcon from "../img/icons.svg";

function Sidebar ({ allDishes }) {
    let [page, setPage] = useState(1);
    const [recipes, setRecipes] = useState(allDishes.slice(0, 10));
    useEffect(() => {
        setRecipes(allDishes.slice(0, 10));
    }, [allDishes]);
    useEffect(() => {
        setRecipes(allDishes.slice(((page * 10) - 10), (page * 10)))
    }, [page]);
    const HandlePrev = () => {
        if (page > 1){
            const setPages = () => {
                setPage((prevValue) => --prevValue);
            };
            return (
                <button className="btn--inline pagination__btn--prev" onClick={setPages}>
                    <svg className="search__icon">
                        <use href={LoaderIcon + `#icon-arrow-left`}></use>
                    </svg>
                    <span className="btn--prev-text">{`Page ${page - 1}`}</span>
                </button>
            );
        }
    };
    const HandleNext = () => {
        if (((page * 10) + 10) < allDishes.length) {
            const setPages = () => {
                setPage(prevValue => ++prevValue)
            };
            return(
                <button className="btn--inline pagination__btn--next" onClick={setPages}>
                    <span className="btn--next-text">{`Page` + (page + 1)}</span>
                    <svg className="search__icon">
                        <use href={LoaderIcon + `#icon-arrow-right`}></use>
                    </svg>
                </button>
            );
        } else return
    };
    return(
        <div className="search-results">
            <ul className="results">
                <ViewAllRecipe data={recipes}/>
            </ul>
            <div className="pagination">
                <HandlePrev/>
                <HandleNext/>
            </div>
            <p className="copyright"> &copy; Copyright by
                <a className="twitter-link" target="_blank" href="https://twitter.com/jonasschmedtman">Jonas Schmedtmann</a>
                . Use for learning or your portfolio. Don't use to teach. Don't claim as your own.
            </p>
        </div>
    );
};
const ViewAllRecipe = ({ data }) => {
    return data.map(elem => {
        return(
            <li className="preview" id={elem.id} key={elem.id}>
                <a className="preview__link preview__link--active" href={`#${elem.id}`}>
                    <figure className="preview__fig">
                        <img src={elem.image_url} alt={elem.title}/>
                    </figure>
                    <div className="preview__data">
                        <h4 className="preview__title">{elem.title}</h4>
                        <p className="preview__publisher">{elem.publisher}</p>
                    </div>
                </a>
            </li>
        );
    });
};
export{Sidebar}