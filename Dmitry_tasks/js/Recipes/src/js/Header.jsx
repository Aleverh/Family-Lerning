import React, {useRef} from "react";
import axios from "axios";
import LoaderIcon from "../img/icons.svg";
import logo from "../img/logo.png"
function useLocalStorageSubscriber(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    React.useEffect(() => {
        window.addEventListener('storage', subscriber);

        return () => {
            window.removeEventListener('storage', subscriber);
        }
    }, []);

    const subscriber = () => {
        const item = JSON.parse(window.localStorage.getItem(key));
        if (item !== storedValue)
        setStoredValue(item);
    };

    return storedValue;
}
const Header = ({dishes}) => {
    return(
        <header className="header">
            <img id="logo" src={logo} alt={'logo'} className="header__logo"/>
            <Search dishes={dishes}/>
            <nav className="nav">
                <ul className="nav__list">
                    <AddRecipeForm/>
                    <Bookmarks/>
                </ul>
            </nav>
        </header>
    );
};
const Search = ({dishes}) => {
    const inputRef = useRef();
    const getRecipeData = () => {
        axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputRef.current.value}`)
            .then( ({ data }) => dishes(data.data.recipes));
        document.querySelector('.search__field').value = "";
    };
    return(
        <form className="search">
            <input type="text" ref={inputRef} className="search__field" placeholder="Search over 1,000,000 recipes..."/>
            <button className="btn search__btn" onClick={getRecipeData} type="button">
                <svg className="search__icon">
                    <use href={`${LoaderIcon}#icon-search`}></use>
                </svg>
                <span>Search</span>
            </button>
        </form>
    );
};
const AddRecipeForm = () => {
    return(
        <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
                <svg className="nav__icon">
                    <use href={`${LoaderIcon}#icon-edit`}></use>
                </svg>
                <span>Add recipe</span>
            </button>
        </li>
    );
};
const Bookmarks = () => {
    return(
        <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
                <svg className="nav__icon">
                    <use href={`${LoaderIcon}#icon-bookmark`}></use>
                </svg>
                <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
                <ul className="bookmarks__list">
                    <RenderAddBookmark/>
                </ul>
            </div>
        </li>
    );
};
const RenderAddBookmark = () => {
    const bookmarks = useLocalStorageSubscriber('bookmarks', []);
    if (bookmarks === undefined || bookmarks.length === 0)
    {
        return <RenderError/>;
    } else {
        return (bookmarks.map(elem => {
            return (
                <li className="preview" key={elem.id} id="${elem.id}">
                    <a className="preview__link" href={'#' + elem.id}>
                        <figure className="preview__fig">
                            <img src={elem.image_url} alt={elem.title}/>
                        </figure>
                        <div className="preview__data">
                            <h4 className="preview__name">{elem.title}</h4>
                            <p className="preview__publisher">{elem.publisher}</p>
                        </div>
                    </a>
                </li>
            );
        }));
    }
};
const RenderError = () => {
    return (
        <div className="message" id="message-bookmarks">
            <div>
                <svg>
                    <use href={`${LoaderIcon}#icon-smile`}></use>
                </svg>
            </div>
            <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
        </div>
    );
};
export {Header};