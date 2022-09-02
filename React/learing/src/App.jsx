import React from 'react';
import logo from './logo.svg';
import Pagination from "./components/pagination/pagination";
import './App.css';

const Preview = ({ title, publisher }) => {
    return (
        <li className="preview">
            <a className="preview__link preview__link--active" href="#23456">
                <figure className="preview__fig">
                    <img src="src/img/test-1.jpg" alt="Test"/>
                </figure>
                <div className="preview__data">
                    <h4 className="preview__title">{title}</h4>
                    <p className="preview__publisher">{publisher}</p>
                    <div className="preview__user-generated">
                        <svg>
                            <use href="src/img/icons.svg#icon-user"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    );
};

function App() {
    const [number, setNumber] = React.useState(0);

    if (number > 5)
        return  (
            <div>number is hiuher then 5</div>
        );

    const recipes = [
        { title: 'Pasta with Tomato Cream ...', publisher: 'Pub1' },
        { title: 'Pasta ', publisher: 'Pub2' },
        { title: 'Pasta wit...', publisher: 'Pub3' },
    ]
    return (
        <div className="App">
            <ul className="results">
                {recipes.map(item => <Preview title={item.title} publisher={item.publisher} />)}

                <Preview title="with Tomato Cre" publisher={recipes[0].publisher} />
                <Preview title={recipes[1].title} publisher={recipes[1].publisher} />
                <Preview title={recipes[2].title} publisher={recipes[2].publisher} />
                <Pagination />
            </ul>
        </div>
    );
}

export default App;
