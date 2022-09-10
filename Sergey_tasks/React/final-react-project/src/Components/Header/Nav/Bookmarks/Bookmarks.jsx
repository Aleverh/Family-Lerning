import React, {useState} from "react";
import "./main.css";
import ShowBookmarks from "./Showbookmarks/ShowBookmarks";

function useLocalStorageSubscriber(key, initialValue) {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.log(error);
         return initialValue;
      }
      
   });


   React.useEffect(() => {
      window.addEventListener('storage', subscriber)
      return () => {
         window.removeEventListener('storage', subscriber);
      }
   }, []);

   const subscriber = () => {
      const item = JSON.parse(window.localStorage.getItem(key))
      if (item !== storedValue)
      setStoredValue(item);
   };
   return storedValue;
}

function Bookmarks({recipe}){
   const updateDataFromLocal = useLocalStorageSubscriber("bookmarks");
   return(
      <li className="nav__item">
         <button className="nav__btn nav__btn--bookmarks">
            <svg className="nav__icon">
               <use href="img/icons.svg#icon-bookmark"></use>
            </svg>
            <span>Bookmarks</span>
         </button>
         <div className="bookmarks">
            <ShowBookmarks updateDataFromLocal={updateDataFromLocal}></ShowBookmarks>
         </div>
      </li>
   )
}
export default Bookmarks;