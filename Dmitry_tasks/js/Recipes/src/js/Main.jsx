import ViewRecipe from "./viewRecipe";
import React from "react";

const Main = ({ recipes}) => {
    return <RecipeInfo recipe={recipes}/>;
};
const RecipeInfo = ({ recipe }) => {
    return <ViewRecipe data={recipe}/>;
};
export {Main};