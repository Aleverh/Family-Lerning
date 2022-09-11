import React, { useState } from "react";

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
export default useLocalStorageSubscriber;