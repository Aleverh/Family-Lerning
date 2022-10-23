import {useState} from "react";
import "../sass/main.scss";
import React from "react";
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";
import {Main} from "./Main";

const App = () => {
    const [recipes, setRecipes] = useState([]);
    return (
        <div className="container">
            <Header dishes={setRecipes}/>
            <Sidebar  allDishes={recipes}/>
            <Main recipes={recipes}/>
        </div>
    );
};
export default App;





















