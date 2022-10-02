import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./main.css"
import AppRouter from './AppRouter';

function App(){
      return( 
         <div className="formContainer">
            <BrowserRouter>
               <AppRouter></AppRouter>
            </BrowserRouter> 
         </div>
      )
}
export default App;