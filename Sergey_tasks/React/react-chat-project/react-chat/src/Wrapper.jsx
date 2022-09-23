import React, {useState, useEffect} from 'react';
// import {Switch, Route} from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import PageRegister from './PageRegister';
import PageLogin from './PageLogin';
import "./main.css";

function Wrapper(){
    
      return( 
         <div className="formWrapper">
            <span className="logo">Chat App</span>
            <BrowserRouter>
               <Switch>
                  <Route path="/register" component={PageRegister}></Route>
                  <Route path="/login" component={PageLogin}></Route>
                  <Route path="/" component={PageLogin}></Route>
               </Switch>
            </BrowserRouter> 
         </div>
      )
}
export default Wrapper;