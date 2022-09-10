import React, { useState } from "react";
import "./main.css";
import Logotype from "./Logotype/Logotype";
import Search from "./Search/Search";
import Nav from "./Nav/Nav";

function Header({handleSubmit, recipe}){
   // console.log(recipe);

   return(
      <div className="header">
         <Logotype></Logotype>
         <Search searchProps={handleSubmit}></Search>
         <Nav recipe={recipe}></Nav>
      </div>
   )
}
export default Header;
