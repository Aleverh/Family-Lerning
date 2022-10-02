import React, {useState} from "react";
import "./main.css";
import Header from "../Header/Header"
import Sidebar from "../SideBar/sidebar";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [recipe, setResipe] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Header handleSubmit={setRecipes} recipe={recipe}></Header>
        <Sidebar recipes={recipes}></Sidebar>
        <RecipeInfo getDataRecipe={setResipe}></RecipeInfo>
      </div>
    </div>
  )
}
export default App;
