import React, { useState } from 'react';
import Pagination from './pagination';
import '../img/icons.svg';

function Result({ resultData, setRecipeData }) {
    async function handleClick(id) {
        // const fetchedData = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        // const result = await fetchedData;
        // const { data } = await result.json();
        // setRecipeData(data.recipe);
    }
    return (
        <li className="preview" onClick={() => { handleClick(resultData.id) }}>
            <a className="preview__link preview__link--active" href={`#` + resultData.id}>
                <figure className="preview__fig">
                    <img src={resultData.image_url} alt="Test" />
                </figure>
                <div className="preview__data">
                    <h4 className="preview__title">{resultData.title}</h4>
                    <p className="preview__publisher">{resultData.publisher}</p>
                    <div className="preview__user-generated">
                        <svg>
                            <use href="src/img/icons.svg#icon-user"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    )
}

function ResultsList({ recipesList, setRecipeData }) {
    const [page, pageUpdate] = useState(1);
    const slicedData = Array.from(recipesList).slice((page - 1) * 10, page * 10);
    const numberOfPages = Math.ceil(Array.from(recipesList).length / 10);
    return (
        <div className='search-results'>
            <ul className="results">
                {slicedData.map(item =>
                    <Result
                        key={item.id}
                        resultData={item}
                        setRecipeData={setRecipeData}
                    />
                )}
            </ul>
            {recipesList ?
                <Pagination
                    page={page}
                    pageUpdate={pageUpdate}
                    numberOfPages={numberOfPages}
                /> :
                <></>
            }
        </div>
    )
}

export default ResultsList;