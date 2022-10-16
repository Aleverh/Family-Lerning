import React from 'react';
import "../components/main.css";
import Nav from './Nav';
import FindUser from './FindUser';
import ActiveUser from './SearchUser';


function SideBar(){
   return(
      <div className='sidebar'>
         <Nav/>
         <FindUser/>
         <ActiveUser/>
      </div>
   )
}
export default SideBar;