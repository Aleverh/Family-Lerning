import React, { useState } from 'react';
import Header from './components/header';
import ResultsList from './components/results';
import Recipe from './components/recipe';
import AddRecipe, { Overlay } from './components/addRecipe'

function App() {
    const [recipesList, setData] = useState('');
    const [recipeData, setRecipeData] = useState('');
    const [classNameForm, setClassForm] = useState('');
    const [classNameOverlay, setClassOverlay] = useState('');
    function handleClassChange() {
        classNameForm ? setClassForm('') : setClassForm('add-recipe-window');
    }
    function handleClassChangeOverlay() {
        classNameOverlay ? setClassOverlay('') : setClassOverlay('overlay');
    }
    return (
        <>
            <div className='container'>
                <Header
                    setData={setData}
                    handleClassChange={handleClassChange}
                    handleClassChangeOverlay={handleClassChangeOverlay}
                />
                <ResultsList
                    recipesList={recipesList}
                    setRecipeData={setRecipeData}
                />
                <Recipe
                    recipeData={recipeData}
                />
            </div>
            <AddRecipe
                className={classNameForm}
                handleClassChange={handleClassChange}
                handleClassChangeOverlay={handleClassChangeOverlay}
            />
            <Overlay
                className={classNameOverlay}
                handleClassChange={handleClassChange}
                handleClassChangeOverlay={handleClassChangeOverlay}
            />
        </>
    );
}

export default App;


//-----------------------

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
    },);

    const updateHash = React.useCallback(
        newHash => {
            if (newHash !== hash) window.location.hash = newHash;
        },
        [hash]
    );
    return [hash, updateHash];
};

export {useHash}; 