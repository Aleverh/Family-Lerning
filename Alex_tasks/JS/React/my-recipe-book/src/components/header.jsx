import React, { useRef } from 'react';
import '../img/icons.svg';
import '../img/logo.png';


const BookmarkItem = (props) => {
    return (
        <li className="preview">
            <a className="preview__link" href="{}">
                <figure className="preview__fig">
                    <img src="{}" alt="{}" />
                </figure>
                <div className="preview__data">
                    <h4 className="preview__name">
                        { }
                    </h4>
                    <p className="preview__publisher">{ }</p>
                </div>
            </a>
        </li>
    )
}

function Header({ setData, handleClassChange, handleClassChangeOverlay }) {
    const inputValue = useRef('');
    async function handleClick(value) {
            const fetchedData = fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${value}`);
            const res = await fetchedData;
            const { data } = await res.json();
            setData(data.recipes);
    }
    return (
        <header className="header">
            <img src="../img/logo.png" alt="Logo" className="header__logo" />
            <form className="search">
                <input
                    type="text"
                    className="search__field"
                    placeholder="Search over 1,000,000 recipes..."
                    ref={inputValue}
                />
                <button type='button' className="btn search__btn" onClick={() => { handleClick(inputValue.current.value) }}>
                    <svg className="search__icon">
                        <use href="../img/icons.svg#icon-search"></use>
                    </svg>
                    <span>Search</span>
                </button>
            </form>

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <button
                            className="nav__btn nav__btn--add-recipe"
                            onClick={() => { handleClassChange(); handleClassChangeOverlay() }}
                        >
                            <svg className="nav__icon">
                                <use href="../img/icons.svg#icon-edit"></use>
                            </svg>
                            <span>Add recipe</span>
                        </button>
                    </li>
                    <li className="nav__item">
                        <button className="nav__btn nav__btn--bookmarks">
                            <svg className="nav__icon">
                                <use href="../img/icons.svg#icon-bookmark"></use>
                            </svg>
                            <span>Bookmarks</span>
                        </button>
                        <div className="bookmarks">
                            <ul className="bookmarks__list">
                                <div className="message">
                                    <div>
                                        <svg>
                                            <use href="../img/icons.svg#icon-smile"></use>
                                        </svg>
                                    </div>
                                    <p>
                                        No bookmarks yet. Find a nice recipe and bookmark it :)
                                    </p>
                                </div> || <BookmarkItem />
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;