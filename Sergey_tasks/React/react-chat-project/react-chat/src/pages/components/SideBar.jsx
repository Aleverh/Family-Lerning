import React, { useState } from 'react';
import "../components/main.css";
import Nav from './Nav';
import FindUser from './FindUser';
import SearchUser from './SearchUser';
// import ExistingsChats from './ExistingsChats';  


function SideBar({authUser}){
   const [foundUsers, setFoundUsers] = useState([]);
  
   return(
      <div className='sidebar'>
         <Nav authUser={authUser}/>
         <FindUser setFoundUsers={setFoundUsers} foundUsers={foundUsers}/>
         <SearchUser authUser={authUser} foundUsers={foundUsers}/>
      </div>
   )
}
export default SideBar;