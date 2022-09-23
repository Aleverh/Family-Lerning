import React from 'react';
import Wrapper from './Wrapper';
import "./main.css";
// import { MemoryRouter} from 'react-router-dom';

function App(){
   console.log("jhbjb");
   return(
      <div className="formContainer">
         {/* <MemoryRouter><Wrapper></Wrapper></MemoryRouter> */}
         <Wrapper></Wrapper>
      
      </div>
   )
}
export default App;